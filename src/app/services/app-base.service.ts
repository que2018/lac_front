import {Injectable} from '@angular/core';

import {Response, RequestOptions, Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppBaseService {
  public baseUrl: String = '';
  public languageBaseUrl: String = 'assets/language/';

  constructor(
    private _baseHttp: Http
  ) {
      //this.baseUrl = GlobalVariables.WEBSITE_SERVER_URL;
  }

public getObservableData(responseData: Response) {
    // const body = responsedata.json();

    return responseData.json();
    // return body;
  }

  public errorHandlerObservable(errorData: Response | any) {
    let errorMessage: String = '';

    if ( errorData instanceof Response ) {
      const body = errorData.json() || '';
      const err = body.err || JSON.stringify(body);
      errorMessage = `${errorData.status} - ${errorData.statusText || ''} - ${err}`;

    } else {
      errorMessage = errorData.message ? errorData.message : errorData.toString();
    }

    return Observable.throw(errorMessage);
  }

  public setHeaderOptions(): RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({ headers: headers, method: 'post'});

  }

     public sendRequest(requestType: string, requestUrl: string, data = {}): Observable<any> {

    switch ( requestType ) {
      case ('get'):
        return this._baseHttp.get(requestUrl)
          .map(this.getObservableData)
          .catch(this.errorHandlerObservable);

      case ('post'):
        return this._baseHttp.post(requestUrl, JSON.stringify(data), this.setHeaderOptions())
          .map(this.getObservableData)
          .catch(this.errorHandlerObservable);

      case ('put'):
        return this._baseHttp.put(requestUrl, JSON.stringify(data), this.setHeaderOptions())
          .map(this.getObservableData)
          .catch(this.errorHandlerObservable);

      case ('delete'):
        return this._baseHttp.delete(requestUrl, this.setHeaderOptions())
          .map(this.getObservableData)
          .catch(this.errorHandlerObservable);
    }
  }

}
