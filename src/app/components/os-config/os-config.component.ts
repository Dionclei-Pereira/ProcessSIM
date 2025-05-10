import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-os-config',
  standalone: false,
  templateUrl: './os-config.component.html',
  styleUrl: './os-config.component.scss'
})
export class OsConfigComponent {

  @Output()
  cpuChange = new EventEmitter<number>();

  @Output()
  ioChange = new EventEmitter<number>();

  cpuInterval: number = 750;
  ioInterval: number = 1500;

  cpuChanged(value: number) {
    this.cpuInterval = value;
    this.cpuChange.emit(this.cpuInterval);
  }

  ioChanged(value: number) {
    this.ioInterval = value;
    this.ioChange.emit(this.ioInterval);
  }
}
