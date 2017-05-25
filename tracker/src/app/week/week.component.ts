import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  // database list items
  public days: FirebaseListObservable<any[]>;
  public monday: FirebaseListObservable<any[]>;
  public tuesday: FirebaseListObservable<any[]>;
  public wednesday: FirebaseListObservable<any[]>;
  public thrusday: FirebaseListObservable<any[]>;
  public friday: FirebaseListObservable<any[]>;
  public saturday: FirebaseListObservable<any[]>;
  public sunday: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.monday = this.af.list('/monday');
    this.tuesday = this.af.list('/monday');
    this.wednesday = this.af.list('/monday');
    this.thrusday = this.af.list('/monday');
    this.friday = this.af.list('/monday');
    this.saturday = this.af.list('/monday');
    this.sunday = this.af.list('/monday');
    this.days = this.af.list('/days');
  }

  add(item) {
    let last; 
    if (item == 'Monday') {
      this.monday.push(last);    
    }

  }

  minus(item) {
    console.log(item); 
  }
}
