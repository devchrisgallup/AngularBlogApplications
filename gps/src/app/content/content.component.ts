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
  public passedStopSign = 'Not passed stop sign.'  

  constructor() { }

  ngOnInit() {
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(this.setPosition.bind(this));
      }
  }

  setPosition(position) {
    this.lat = position.coords.latitude; 
    this.long = position.coords.longitude; 
    if (this.lat > 39.0680940){
      this.passedStopSign = 'Passed stop sign.'; 
    }
  }
}
