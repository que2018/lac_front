import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
    imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoginRoutingModule
    ],
    declarations: [
        LoginComponent,
		        

    ],
    providers: [
       LoginService
    ]
})

export class LoginModule {}
