import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {AppBaseService} from './app-base.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CustomerService extends AppBaseService {
    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getCustomerInfromation(customer_id: string): Observable<any> {
        const customerInfoUrl = this.baseUrl + 'customer/customer/get_customer_by_id/' + customer_id;
        return this.sendRequest('get', customerInfoUrl);
    }

}
