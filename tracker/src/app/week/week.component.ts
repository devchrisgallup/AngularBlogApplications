import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  // database list items
  public days: FirebaseListObservable<any[]>;
  public monday: FirebaseObjectObservable<any[]>;
  public tuesday: FirebaseListObservable<any[]>;
  public wednesday: FirebaseListObservable<any[]>;
  public thrusday: FirebaseListObservable<any[]>;
  public friday: FirebaseListObservable<any[]>;
  public saturday: FirebaseListObservable<any[]>;
  public sunday: FirebaseListObservable<any[]>;

  public mondayString: string; 

  public sub;

  constructor(private af: AngularFireDatabase) {
      this.monday = this.af.object('/days',{ preserveSnapshot: true});
      this.days = this.af.list('/days');
   }

  ngOnInit() {
  }

  add() {
    let last; 
    this.sub = this.monday.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        last = snapshot.val() + 1;  
        this.monday.set({count:last}); 
        this.sub.unsubscribe(); 
      });
    });
  }

  minus() {
    let last; 
    this.sub = this.monday.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        last = snapshot.val() - 1;  
        this.monday.set({day:last});
        this.mondayString = last;  
        this.sub.unsubscribe(); 
      });
    });
  }
}