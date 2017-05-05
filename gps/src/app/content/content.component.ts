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
  public lat; 
  public long; 
  public changed = 0; 
  public passedStopSign = 'Not passed stop sign.'  

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(this.setPosition.bind(this));
      }
    this.items = this.af.list('/items');
  }

  setPosition(position) {
    this.lat = position.coords.latitude; 
    this.long = position.coords.longitude; 
    if (this.lat > 39.0680940){
      this.passedStopSign = 'Passed stop sign.'; 
    }
  }

  processData() {
    this.items.push(this.lat); 
  }

  delete(item) {
    this.items.remove(item)
  }
}
