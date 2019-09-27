
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class Auth implements CanActivate {
	constructor(
		private loginService: LoginService,
		private _router: Router,
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const url = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		
		let result = this.loginService.getInfo();
		
		console.log(result);
		
		if(false) {
			return true;
		} else {
			this._router.navigate(['/login']);
			return false;
		}
	}
}