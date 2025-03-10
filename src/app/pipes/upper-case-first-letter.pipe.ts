import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseFirstLetter',
  standalone: false
})
export class UpperCaseFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase()+value.substring(1)
  }

}
