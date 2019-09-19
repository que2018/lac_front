import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/index';
import { AppBaseService } from './app-base.service';

@Injectable()
export class LoginService extends AppBaseService {
    constructor(private _http: Http) {
        super(_http);
    }

	public login(data: {}): Observable<any> {		
        const url = 'http://localhost:8080/admin/login/';
        return this.sendRequest('post', url, data);
    }
}
