import { Component } from '@angular/core';
import { IProcess } from '../../interfaces/process.interface';
import { ProcessStatus } from '../../enums/process-status.enum';

@Component({
  selector: 'app-process-list',
  standalone: false,
  templateUrl: './process-list.component.html',
  styleUrl: './process-list.component.scss'
})
export class ProcessListComponent {

  dataSource: IProcess[] = [
    {color: 'blue', pid: 1, status: ProcessStatus.READY, remaining: 5},
    {color: 'red', pid: 2, status: ProcessStatus.WAITING, remaining: 5},
    {color: 'purple', pid: 13, status: ProcessStatus.RUNNING, remaining: 5},
    {color: 'orange', pid: 6, status: ProcessStatus.READY, remaining: 5},
    {color: 'yellow', pid: 4, status: ProcessStatus.READY, remaining: 5},
    {color: 'aqua', pid: 3, status: ProcessStatus.READY, remaining: 5},
    {color: 'black', pid: 100, status: ProcessStatus.READY, remaining: 5}
  ];

  displayedColumns: string[] = ['icon', 'pid', 'status', 'remaining'];

  selected: IProcess | null = null;

  onClick(process: IProcess) {
    this.selected = process;
  }
}
