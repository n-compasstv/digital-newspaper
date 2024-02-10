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
        const URL = 'https://api-development.n-compass.online:4203/api/placer/news?community=2887&limit=5';
        return this._http.get<any>(URL);
    }
}
