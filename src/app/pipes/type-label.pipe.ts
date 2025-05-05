import { Pipe, PipeTransform } from '@angular/core';
import { ProcessType } from '../enums/process-type.enum';

@Pipe({
  name: 'typeLabel',
  standalone: false
})
export class TypeLabelPipe implements PipeTransform {

  transform(value: ProcessType): string {
    return ProcessType[value];
  }
}
