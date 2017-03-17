import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable() 
export class UserService {
    private dataUrl: string = 'http://api.tvmaze.com/search/shows?q=dog';
    constructor(private http: Http) {}
    // get data
    getData(): Observable<User[]> {
        return this.http.get(this.dataUrl)
        .map(res => res.json());  
    }
}
