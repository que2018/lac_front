import {Injectable} from '@angular/core';
import {AppBaseService} from './app-base.service';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryService extends AppBaseService {

    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getEnableCategoryList(data = {}): Observable<any> {
        const enableCategoryListUrl = this.baseUrl + 'production/category/get_enable_category_list';
        return this.sendRequest('post', enableCategoryListUrl, data);
    }

    public getCategoryById(category_id: String): Observable<any> {
        const enableCategoryListUrl = this.baseUrl + 'production/category/get_category_by_id/' + category_id;
        return this.sendRequest('get', enableCategoryListUrl);
    }
}
