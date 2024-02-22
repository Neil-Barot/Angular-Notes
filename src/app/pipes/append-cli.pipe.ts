import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCli',
  standalone: true
})
export class AppendCliPipe implements PipeTransform {

  transform(value: any, args?: any): unknown {
    return null;
  }

}
