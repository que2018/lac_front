import {Injectable} from '@angular/core';
import {AppBaseService} from './app-base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class PostService extends AppBaseService {
    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getCustomerPostList(data: {}): Observable<any> {
        const postListUrl = this.baseUrl + 'production/post/agent_get_customer_post_list';
        return this.sendRequest('post', postListUrl, data);
    }

    public getPostDetail(data: {}): Observable<any> {
        const postDetailUrl = this.baseUrl + 'production/post/get_post_detail';
        return this.sendRequest('post', postDetailUrl, data);
    }

    public addPostLikeNum(post_id: string): Observable<any> {
        const postContentUrl = this.baseUrl + 'production/post/add_post_like_num/' + post_id;
        return this.sendRequest('get', postContentUrl);
    }

    public addPostViewNum(post_id: string): Observable<any> {
        const postContentUrl = this.baseUrl + 'production/post/add_post_view_num/' + post_id;
        return this.sendRequest('get', postContentUrl);
    }

    public getWeChatShareData(data: {}): Observable<any> {
        const wechatShareUrl = this.baseUrl + 'auth/share_wechat/get_wechat_share_data';
        return this.sendRequest('post', wechatShareUrl, data);
    }

    // For professional list
    public getAllProfessionalList(data: {}): Observable<any> {
        const professionalListUrl = this.baseUrl + 'production/post/get_professional_list';
        return this.sendRequest('post', professionalListUrl, data);
    }

    // For send post to 58 function
    public agentSendPostTo58(data: {}): Observable<any> {
        const operationUrl = this.baseUrl + 'production/post/agent_send_post_to_58';
        return this.sendRequest('post', operationUrl, data);
    }
}
