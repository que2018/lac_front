// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

import { MenService } from '../../services/men.service';

// Components Routing
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
	imports: [
		CommonModule,
		PeopleRoutingModule
	],
	declarations: [
		MenComponent,
		WomenComponent
	],
	providers: [
		MenService
	]
})
export class PeopleModule { }
