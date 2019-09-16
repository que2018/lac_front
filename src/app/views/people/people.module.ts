import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaleComponent } from './male/male.component';
import { WomenComponent } from './women/women.component';
import { MaleService } from '../../services/male.service';
import { MaleModule } from './male/male.module';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
	imports: [
		CommonModule,
		MaleModule,
		PeopleRoutingModule
	],
	declarations: [
		
	],
	providers: [
		MaleService
	]
})
export class PeopleModule { }
