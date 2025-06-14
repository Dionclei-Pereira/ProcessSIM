import { Component } from '@angular/core';
import { IProcess } from './interfaces/process.interface';
import { ProcessStatus } from './enums/process-status.enum';
import { MatTableDataSource } from '@angular/material/table';
import { Algorithm } from './enums/os.algorithm.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProcessSIM';

  dataSource = new MatTableDataSource<IProcess>([]);

  cpuInterval: number = 750;
  ioInterval: number = 1500;
  algorithm: Algorithm = Algorithm.FIFO;

  onCpuChange(value: number) {
    this.cpuInterval = value;
  }

  onIoChange(value: number) {
    this.ioInterval = value;
  }

  onAlgChange(algorithm: number) {
    this.algorithm = algorithm;
  }

  onCreateProcess(process: IProcess) {
    const data = this.dataSource.data;

    process.status = ProcessStatus.READY;

    data.push(process);
    this.dataSource.data = [...data];
  }

  onDeleteProcess(process: IProcess) {
    const data = this.dataSource.data;

    let updated = data.filter(p => p.pid !== process.pid);

    this.dataSource.data = [...updated];
  }


  onSuspendProcess(process: IProcess) {
    const data = this.dataSource.data;
    
    let updatedStatus = process.status === 5 ? 1 : 5;
    process.status = updatedStatus;

    data.map(p => p.pid === process.pid ? process : p)

    this.dataSource.data = [...data];
  }

  onUpdateProcess(process: IProcess) {
    let data = this.dataSource.data;

    if (process.status === ProcessStatus.TERMINATED) {
      data = data.filter(p => p.pid !== process.pid);
    } else {
      data.map(p => p.pid === process.pid ? process : p)
    }

    this.dataSource.data = [...data];
  }
}