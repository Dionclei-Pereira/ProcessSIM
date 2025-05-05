import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProcess } from '../../interfaces/process.interface';
import { ProcessStatus } from '../../enums/process-status.enum';
import { ProcessType } from '../../enums/process-type.enum';

@Component({
  selector: 'app-process-list',
  standalone: false,
  templateUrl: './process-list.component.html',
  styleUrl: './process-list.component.scss'
})
export class ProcessListComponent {

  @Input({ required: true})
  dataSource: IProcess[] = []

  @Output()
  processEmitter = new EventEmitter<IProcess>();

  displayedColumns: string[] = ['icon', 'pid', 'status', 'remaining'];

  selected: IProcess | null = null;

  type: ProcessType | undefined;
  priority: number | undefined;
  cycles: number | undefined;

  onClick(process: IProcess) {
    this.selected = process;
  }

  onCreate() {
    const PROCESS_NOT_VALID = (this.type === undefined || this.cycles === undefined || this.priority === undefined);
    if (PROCESS_NOT_VALID) return;

    let process: IProcess = {
      color: this.generateRandomColor(),
      pid: this.generateRandomPID(),
      remaining: this.cycles as number,
      status: ProcessStatus.NEW,
      type: this.type as number
    }
    
    this.processEmitter.emit(process);
  }

  private generateRandomPID(): number {
    return Math.floor(Math.random() * 999999);
  }

  private generateRandomColor(): string {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
  
    return `#${hexR}${hexG}${hexB}`;
  }
}
