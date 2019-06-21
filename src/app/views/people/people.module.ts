// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenComponent } from './men/men.component';
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
		
	],
	providers: [
		MenService
	]
})
export class PeopleModule { }
