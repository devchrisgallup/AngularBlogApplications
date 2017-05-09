import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public items: FirebaseListObservable<any[]>;
  public latObs: FirebaseListObservable<any[]>;
  public longObs: FirebaseListObservable<any[]>;
  public lat; 
  public long; 
  public changed = 0; 
  public passedStopSign = 'Not passed stop sign.'; 
  public bigQ; 

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(this.setPosition.bind(this));
      }
    this.items = this.af.list('/items');
    this.latObs = this.af.list('/location');
    this.longObs = this.af.list('/long');  
  }

  setPosition(position) {
    this.lat = position.coords.latitude; 
    this.long = position.coords.longitude; 
    if (this.lat > 39.0680940){
      this.passedStopSign = 'Passed stop sign.'; 
    }
  }

  processData() { 
    let item = {
      lat:this.lat, 
      long:this.long
    }; 
    this.latObs.push(item);
  }

  deleteLat(item) {
    this.latObs.remove(item);
  }

  deleteLong(item) {
    this.longObs.remove(item);
  }
}
