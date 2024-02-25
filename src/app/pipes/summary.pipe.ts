import { Pipe, PipeTransform, numberAttribute } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if(!length) {
      length = 20
    }
    return value.substring(0,length);

  }

}
