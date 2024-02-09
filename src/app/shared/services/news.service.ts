/**
 * @todo - lets create a base service for all possible http requests
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    constructor(private _http: HttpClient) {}

    getLocalLabNews() {
        const URL = 'https://pipeline-api.locallabs.com/api/v1/stories?by_community=2887&limit=3';
        const headers = new HttpHeaders({
            Authorization: 'J18-j9F_qnj8urgoF8ZV',
        });
        return this._http.get(URL, { headers: headers });
    }
}
