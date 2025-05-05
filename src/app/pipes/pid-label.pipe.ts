import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pidLabel',
  standalone: false
})
export class PidLabelPipe implements PipeTransform {

  transform(value: number): string {
    let pid: string = value.toString();

    while(pid.length < 6) {
      pid = "0" + pid;
    }

    return pid;
  }

}
