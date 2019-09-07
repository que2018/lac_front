import {Injectable} from '@angular/core';
import {AppBaseService} from './app-base.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class MaleService extends AppBaseService {
    constructor(private _http: Http) {
        super(_http);
    }

    public getMaleList(data: {}): Observable<any> {
        const url = 'http://localhost:8080/male/list';
        return this.sendRequest('post', url, data);
    }
	
	public getMaleInfo(maleId: number): Observable<any> {
        const url = 'http://localhost:8080/male/get/' + String(maleId);
        return this.sendRequest('get', url);
    }
	
	public addMaleInfo(data: {}): Observable<any> {		
        const url = 'http://localhost:8080/male/add/';
        return this.sendRequest('post', url, data);
    }
	
	public saveMaleInfo(maleId: number, data: {}): Observable<any> {		
        const url = 'http://localhost:8080/male/update/' + String(maleId);
        return this.sendRequest('post', url, data);
    }
}
