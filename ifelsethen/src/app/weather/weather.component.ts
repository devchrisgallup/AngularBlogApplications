import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    private dataUrl: string = 'http://api.wunderground.com/api//conditions/q/MO/Independence.json';
    private users; 
    private temp; 
    private url; 
    private wind; 
    constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(this.dataUrl)
             .subscribe(data => this.users = data.json());
    
  }

  processData() {
    this.temp = this.users.current_observation.temp_f; 
    this.url = this.users.current_observation.icon_url;
    this.wind = this.users.current_observation.wind_mph; 
  }
}
