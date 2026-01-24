import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTransform',
  standalone: true
})
export class StringTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Remove everything except letters
    const lettersOnly = value.replace(/[^a-zA-Z]/g, '');

    // Reverse the string
    return lettersOnly.split('').reverse().join('');
  }

}
