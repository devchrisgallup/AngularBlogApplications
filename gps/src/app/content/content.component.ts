import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public lat; 
  public long; 
  public changed = 0; 

  constructor() { }

  ngOnInit() {
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(this.setPosition.bind(this));
      }
  }

  setPosition(position) {
    this.lat = position.coords.latitude; 
    this.long = position.coords.longitude; 
    this.changed++;  
  }
}
