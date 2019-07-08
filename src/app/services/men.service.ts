import {Injectable} from '@angular/core';
import {AppBaseService} from './app-base.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class MenService extends AppBaseService {
    constructor(private _http: Http) {
        super(_http);
    }

    public getMenList(data: {}): Observable<any> {
        const url =  'http://localhost:8080/male/list';
        return this.sendRequest('post', url, data);
    }
	
	public getMenInfo(MaleId: number): Observable<any> {
        const url =  'http://localhost:8080/male/get/' + String(MaleId);
        return this.sendRequest('get', url);
    }
	
	public saveMenInfo(data: {}): Observable<any> {		
        const postListUrl =  'http://localhost/church/men_save.php';
        return this.sendRequest('post', postListUrl, data);
    }
}
