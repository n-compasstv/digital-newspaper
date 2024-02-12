/**
 * @todo - lets create a base service for all possible http requests
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsData } from '@shared/interfaces';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    constructor(private _http: HttpClient) {}

    getNewsData() {
        return this._http.get<NewsData>('/assets/data.json');
    }
}
