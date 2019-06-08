import {Injectable} from '@angular/core';
import {AppBaseService} from './app-base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SliderService extends AppBaseService {
    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getCustomerSliders(customer_id: string): Observable<any> {
        const customerSliderUrl = this.baseUrl + 'customer/slider/get_customer_slider/' + customer_id;
        return this.sendRequest('get', customerSliderUrl);
    }
}
