import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
    imports: [
		AlertModule.forRoot(),
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
       LoginService
    ]
})

export class LoginModule {}
