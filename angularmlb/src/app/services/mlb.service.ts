import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MlbService {
    public dataUrl: string; 
    private bootdate = new Date(); 
    private year = this.bootdate.getFullYear(); 
    private month = this.bootdate.getMonth() + 1; 
    private day = this.bootdate.getDate() - 2; 
    constructor(private http: Http) { }
    // get data
    getData() { 
        if(this.month <= 9 && this.day <= 9) {
            // http get request
            this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_' + this.year + '/month_0' + this.month + '/day_0' + this.day + '/master_scoreboard.json';
            return this.http.get(this.dataUrl)
            .map(data => data.json());  
        } else if (this.month <= 9) {
            // http get request
            this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_' + this.year + '/month_0' + this.month + '/day_' + this.day + '/master_scoreboard.json';
            return this.http.get(this.dataUrl)
            .map(data => data.json());  
        } else if (this.day <= 9) {
            // http get request
            this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_' + this.year + '/month_' + this.month + '/day_0' + this.day + '/master_scoreboard.json';
            return this.http.get(this.dataUrl)
            .map(data => data.json());  
        } else {
            // http get request
            this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_' + this.year + '/month_' + this.month + '/day_' + this.day + '/master_scoreboard.json';
            return this.http.get(this.dataUrl)
            .map(data => data.json());  
        }
    }

    // get selected data
    getSelectedDate(year, month, day) {
        // http get request
        this.dataUrl = 'http://mlb.mlb.com/gdcross/components/game/mlb/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';
        return this.http.get(this.dataUrl)
        .map(data => data.json());  
    }
}
