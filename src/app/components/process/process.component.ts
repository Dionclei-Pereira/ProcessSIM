import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: false,
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

  @Input({ required: true })
  color: string = '';
  
}
