import { Component, EventEmitter, Output } from '@angular/core';
import { Algorithm } from '../../enums/os.algorithm.enum';

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

  @Output()
  algChange = new EventEmitter<number>();

  cpuInterval: number = 750;
  ioInterval: number = 1500;

  algorithm: Algorithm = Algorithm.FIFO;

  algorithmChanged(value: Algorithm) {
    this.algorithm = value;
  }

  cpuChanged(value: number) {
    this.cpuInterval = value;
    this.cpuChange.emit(this.cpuInterval);
  }

  ioChanged(value: number) {
    this.ioInterval = value;
    this.ioChange.emit(this.ioInterval);
  }

  algChanged(value: number) {
    this.algorithm = value;
    this.algChange.emit(value);
  }
}
