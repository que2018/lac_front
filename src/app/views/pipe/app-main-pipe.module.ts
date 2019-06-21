
import {NgModule} from '@angular/core';
import {AppPipeStatus} from './app-pipe-status';
import {AppPipeGender} from './app-pipe-gender';

@NgModule({
  declarations: [
    AppPipeStatus,
    AppPipeGender,
  ],
  exports: [
    AppPipeStatus,
    AppPipeGender,
  ]
})
export class AppMainPipeModule {}
