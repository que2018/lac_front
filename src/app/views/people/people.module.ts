// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { WomenComponent } from './women/women.component';
import { MenService } from '../../services/men.service';

// Components Routing
import { MenModule } from './men/men.module';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
	imports: [
		CommonModule,
		MenModule,
		PeopleRoutingModule
	],
	declarations: [
		WomenComponent
	],
	providers: [
		MenService
	]
})
export class PeopleModule { }
