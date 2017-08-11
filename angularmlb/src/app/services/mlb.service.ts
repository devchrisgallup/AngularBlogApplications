import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MlbService {
    public dataUrl: string; 
    constructor(private http: Http) {
    }
    // get data
    getData() {
        // http get request
        this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_2017/month_08/day_10/master_scoreboard.json';
        return this.http.get(this.dataUrl)
        .map(data => data.json());  
    }

    // get selected data
    getSelectedDate(year, month, day) {
        // http get request
        this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';
        return this.http.get(this.dataUrl)
        .map(data => data.json());  
    }
}
