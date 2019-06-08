import {Injectable} from '@angular/core';
import {AppBaseService} from './app-base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class MessageService extends AppBaseService {

    constructor(private _http: HttpClient) {
        super(_http);
    }

    public addMessage(data = {}): Observable<any> {
        const messageUrl = this.baseUrl + 'production/message/add_message';
        return this.sendRequest('post', messageUrl, data);
    }
}
