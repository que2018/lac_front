import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AppMainPipeModule} from '../../pipe/app-main-pipe.module';

import {UtilModule} from '../../util/util.module';


import {MenComponent} from './men.component';
import {MenRoutingModule} from './men-routing.module';
import {MenAddComponent} from './men-add/men-add.component';
import {MenEditComponent} from './men-edit/men-edit.component';
import {MenListComponent} from './men-list/men-list.component';

@NgModule({
    imports: [
		CommonModule,
		FormsModule,
		AppMainPipeModule,
		UtilModule,
		MenRoutingModule
    ],
    declarations: [
        MenComponent,
		MenAddComponent,
		MenEditComponent,
        MenListComponent
    ],
    providers: [
       
    ]
})

export class MenModule {}
