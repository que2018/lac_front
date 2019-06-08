import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppBaseService} from './app-base.service';
import {Observable} from 'rxjs/index';

@Injectable()
export class LanguageService extends AppBaseService {
    private currentLanguageCode: string;
    private currentLanguageId: string;
    private enableLanguageList = [];

    constructor(private _http: HttpClient) {
        super(_http);

        this.setLanguageFlag(sessionStorage.getItem('SystemLanguageCode'), sessionStorage.getItem('SystemLanguageId'));
        // this.setLanguageFlag('chinese', '2');
        // console.log('+++> Language Flag is: ' + this.currentLanguageCode);
    }

    // Reserved for multi languages
    public setLanguageFlag(languageCode: string, languageId: string): void {
        if ( (languageCode === null) || (languageCode.length <= 0) ) {
            this.currentLanguageCode = 'chinese';
            this.currentLanguageId = '2';
            sessionStorage.setItem('SystemLanguageCode', 'chinese');
            sessionStorage.setItem('SystemLanguageId', '2');
            // console.log('+++> Language Flag is reset by: ' +  languageName);
        } else {
            this.currentLanguageCode = languageCode;
            this.currentLanguageId = languageId;
            sessionStorage.setItem('SystemLanguageCode', languageCode);
            sessionStorage.setItem('SystemLanguageId', languageId);

        }
    }

    public setEnableLanguageList(data = []) {
        this.enableLanguageList = data;
    }

    public getEnableLanguageList(): Object {
        return this.enableLanguageList;
    }

    public getCurrentLanguageId(): String {
        if ( (this.currentLanguageId === null) || (this.currentLanguageId.length <= 0)) {
            return '1';
        } else {
            return this.currentLanguageId;
        }
    }

    public getPageContent(partName: string): Observable<any> {
        const fileName = this.languageBaseUrl + this.currentLanguageCode + '/' + partName + '.json';
        return this.sendRequest('get', fileName);
    }

    // Basic operation for system language.
    public getEnableLanguages(): Observable<any> {
        const enableLanguageUrl = this.baseUrl + 'system/language/get_enable_language';
        return this.sendRequest('post', enableLanguageUrl);
    }
}
