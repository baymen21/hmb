import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concactStringIngenieur',
  standalone: false
})
export class ConcactStringIngenieurPipe implements PipeTransform {

  transform(value: string): string {
    return "Ingenieur "+value;
  }
  }