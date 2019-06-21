
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'AppPipeStatus'
})
export class AppPipeStatus implements PipeTransform {
  transform(value: any): string {
    if ( +value === 0 ) {
      return 'Disabled';
    } else if ( +value === 1 ) {
      return 'Enabled';
    }
  }
}

