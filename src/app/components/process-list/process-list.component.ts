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

  dataSource: IProcess[] = []

  displayedColumns: string[] = ['icon', 'pid', 'status', 'remaining'];
}
