import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProcess } from '../../interfaces/process.interface';
import { ProcessType } from '../../enums/process-type.enum';
import { ProcessStatus } from '../../enums/process-status.enum';
import { Algorithm } from '../../enums/os.algorithm.enum';

@Component({
  selector: 'app-process-spec',
  standalone: false,
  templateUrl: './process-spec.component.html',
  styleUrl: './process-spec.component.scss'
})
export class ProcessSpecComponent implements OnInit {

  @Input({ required: true })
  processList: IProcess[] = [];

  @Output()
  processUpdated = new EventEmitter<IProcess>();

  queues: Record<number, IProcess[]> = {
    0: [],
    1: [],
    2: []
  };

  waitingProcesses: IProcess[] = [];

  paused: boolean = false;
  cpuInterval: number = 1500;
  ioInterval: number = 5000;
  algorithm: Algorithm = Algorithm.FIFO;

  executing: IProcess | undefined;
  waiting: IProcess | undefined;

  ngOnInit(): void {

    //IO
    setInterval(() => {
      if (this.paused) return;

      if (this.waiting) {
        this.waiting.remaining--;

        if (this.waiting.remaining <= 0) {
          this.waiting.status = ProcessStatus.TERMINATED;
          this.removeProcess(this.waiting);
          this.processUpdated.emit(this.waiting);
          this.waiting = undefined;
          return;
        }

        this.waiting.status = ProcessStatus.READY;
        this.processUpdated.emit(this.waiting);
        this.updateQueues();
        this.waiting = undefined;
        return;
      }

      this.updateQueues();
      const process = this.getNextWaiting();

      if (process) {
        this.waiting = process;
      } else {
        this.waiting = undefined;
      }
      
    }, this.ioInterval);

    //CPU
    setInterval(() => {
      if (this.paused) return;
  
      if (this.executing) {
        this.updateProcess(this.algorithm);
        return;
      }
  
      this.updateQueues();
  
      const process = this.getNext();
  
      if (process) {
        process.status = ProcessStatus.RUNNING;
        this.executing = process;
        this.processUpdated.emit(process);
      } else {
        this.executing = undefined;
      }
  
      this.updateQueues();
    }, this.cpuInterval);
  }

  private removeProcess(process: IProcess) {
    this.queues[0] = this.queues[0].filter(p => p.pid !== process.pid);
    this.queues[1] = this.queues[1].filter(p => p.pid !== process.pid);
    this.queues[2] = this.queues[2].filter(p => p.pid !== process.pid);
  }

  private updateProcess(algorithm: Algorithm): void {
    if (!this.executing) return;
  
    const process = this.executing;
  
    if (process.type == ProcessType.CPU) {
      process.instant = Date.now();
      process.remaining--;
  
      if (algorithm === Algorithm.ROUND_ROBIN) {
        process.status = ProcessStatus.READY;
      }
      
      if (process.remaining <= 0) {
        process.status = ProcessStatus.TERMINATED;
        this.removeProcess(process);
        this.processUpdated.emit(process);
        this.executing = undefined;
        return;
      }
  
      this.updateQueues();
  
      if (algorithm === Algorithm.ROUND_ROBIN) {
        this.executing = undefined;
      }
    } else {
      this.executing = undefined;
      process.status = ProcessStatus.WAITING;
      process.instant = Date.now();
      this.processUpdated.emit(process);
      this.updateQueues();
    }
  }

  private getNext(): IProcess | undefined {
    return this.queues[2].shift() 
        ?? this.queues[1].shift() 
        ?? this.queues[0].shift();
  }

  private getNextWaiting(): IProcess | undefined {
    return this.waitingProcesses.shift();
  }

  private updateQueues() {
    let filteredList = this.processList.filter(p => p.status === ProcessStatus.READY);
    this.waitingProcesses = this.processList.filter(p => p.status === ProcessStatus.WAITING && p !== this.waiting).sort((a, b) => a.instant - b.instant);

    this.queues[2] = this.sortQueue(filteredList.filter(p => p.priority == 2));
    this.queues[1] = this.sortQueue(filteredList.filter(p => p.priority == 1));
    this.queues[0] = this.sortQueue(filteredList.filter(p => p.priority == 0));
  }

  private sortQueue(queue: IProcess[]): IProcess[] {
    return this.algorithm === Algorithm.SJF ? 
      queue.sort((a, b) => a.remaining - b.remaining) :
      queue.sort((a, b) => a.instant - b.instant)
  }
}
