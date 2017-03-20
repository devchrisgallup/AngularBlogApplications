import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable() 
export class UserService {
    private dataUrl: string = 'http://api.tvmaze.com/search/shows?q=';
    constructor(private http: Http) {}
    // get data
    getData(item) {
        return this.http.get(this.dataUrl + item)
        .map(res => res.json());  
    }
}
