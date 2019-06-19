import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenComponent} from './men.component';
import {MenRoutingModule} from './men-routing.module';
import {MenAddComponent} from './men-add/men-add.component';
import {MenEditComponent} from './men-edit/men-edit.component';
import {MenListComponent} from './men-list/men-list.component';

@NgModule({
    imports: [
		CommonModule,
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
