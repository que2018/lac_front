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
        const postListUrl =  'http://localhost/church/men_list.php';
        return this.sendRequest('post', postListUrl, data);
    }
	
	public getMenInfo(data: {}): Observable<any> {
        const postListUrl =  'http://localhost/church/men_info.php';
        return this.sendRequest('post', postListUrl, data);
    }
	
	public saveMenInfo(data: {}): Observable<any> {
        const postListUrl =  'http://localhost/church/men_save.php';
        return this.sendRequest('post', postListUrl, data);
    }
}
