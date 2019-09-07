
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if ( this._authService.isLoggedIn() ) {
      // alert("You already logged in - From AuthGuard");
      return true;
    }

    this._authService.redirectUrl = url;

    // Navigate to Login Page
    this._router.navigate(['/auth/login']);

    return false;
  }


}
