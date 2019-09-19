import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: 'login.component.html'
})

export class LoginComponent { 

	public loginForm: FormGroup;

	constructor(
		private router: Router,
		private loginService: LoginService,
		private _formBuilder: FormBuilder
	) {}
	
	ngOnInit() {		
		this.loginForm = new FormGroup({
			username: new FormControl(''),
			password: new FormControl(''),
		});
	}	
	
	login() {		
		var loginInfo = {
			username: this.loginForm.controls['username'].value,
			password: this.loginForm.controls['password'].value
		}
	
		this.loginService.login(this.loginForm.value).subscribe(
            returnData => {
                if(returnData.code == 200) {
					this.router.navigate(['/people/male']);
				
                }
            },
            errorData => {
                console.log('===> save male info error: ' + errorData);
            }
        );
    }
}
