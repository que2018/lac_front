import {Injectable} from '@angular/core';

import {Response, RequestOptions, Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppBaseService {
	public baseUrl: String = '';

	constructor(private http: Http) {
		//this.baseUrl = GlobalVariables.WEBSITE_SERVER_URL;
	}

	public getObservableData(responseData: Response) {
		return responseData.json();
	}

	public errorHandlerObservable(errorData: Response | any) {
		let errorMessage: String = '';

		if(errorData instanceof Response) {
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
		switch(requestType){
			case('get'):
				return this.http.get(requestUrl)
				.map(this.getObservableData)
				.catch(this.errorHandlerObservable);

			case('post'):
				console.log("in the send request .. ");
				console.log(data);
				console.log(JSON.stringify(data));
				
				return this.http.post(requestUrl, JSON.stringify(data), this.setHeaderOptions())
				.map(this.getObservableData)
				.catch(this.errorHandlerObservable);
		  
			case('put'):
				return this.http.put(requestUrl, JSON.stringify(data), this.setHeaderOptions())
				.map(this.getObservableData)
				.catch(this.errorHandlerObservable);

			case('delete'):
				return this.http.delete(requestUrl, this.setHeaderOptions())
				.map(this.getObservableData)
				.catch(this.errorHandlerObservable);
		}
	}
}
