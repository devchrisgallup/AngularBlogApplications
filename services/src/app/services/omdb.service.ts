import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class OmdbService {
  public dataUrl: string; 
  constructor(private http: Http) { 

  }
  // get data with service 
  // use data in muiltple components
  getData(item) {
    this.dataUrl = 'http://www.omdbapi.com/?t=' + item + '&plot=full';
    return this.http.get(this.dataUrl)
                    .map(data => data.json());
  }
}
