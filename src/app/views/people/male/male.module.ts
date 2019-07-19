import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AppMainPipeModule} from '../../pipe/app-main-pipe.module';

import {UtilModule} from '../../util/util.module';


import {MaleComponent} from './male.component';
import {MaleRoutingModule} from './male-routing.module';
import {MaleAddComponent} from './male-add/male-add.component';
import {MaleEditComponent} from './male-edit/male-edit.component';
import {MaleListComponent} from './male-list/male-list.component';

@NgModule({
    imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AppMainPipeModule,
		UtilModule,
		MaleRoutingModule
    ],
    declarations: [
        MaleComponent,
		MaleAddComponent,
		MaleEditComponent,
        MaleListComponent
    ],
    providers: [
       
    ]
})

export class MaleModule {}
