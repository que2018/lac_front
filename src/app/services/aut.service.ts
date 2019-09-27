import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/index';
import { AppBaseService } from './app-base.service';

@Injectable()
export class AutService extends AppBaseService {
    constructor(private _http: Http) {
        super(_http);
    }

	public getInfo(): Observable<any> {		
        const url = 'http://localhost:8080/admin/info/';
         return this.sendRequest('get', url);
    }
}
