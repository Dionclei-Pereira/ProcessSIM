import { Pipe, PipeTransform } from '@angular/core';
import { ProcessStatus } from '../enums/process-status.enum';

@Pipe({
  name: 'statusLabel',
  standalone: false
})
export class StatusLabelPipe implements PipeTransform {

  transform(value: ProcessStatus): unknown {
    return ProcessStatus[value];
  }

}
