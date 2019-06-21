
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'AppPipeGender'
})
export class AppPipeGender implements PipeTransform {
  transform(value: string): string {
    // if ( value === 'F' ) {
    //   return 'Female';
    // } else if ( value === 'M' ) {
    //   return 'Male';
    // } else {
    //   return 'Not Sure';
    // }
    let result: string = '';

    switch ( value ) {
      case 'F':
        result = 'Female';
        break;
      case 'M':
        result = 'Male';
        break;
      default:
        result = 'Not Sure';
    }

    return result;
  }
}

