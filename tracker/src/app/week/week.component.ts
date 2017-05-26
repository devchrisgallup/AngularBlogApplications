import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  // database list items
  public list: FirebaseListObservable<any[]>;
  public tracker: FirebaseObjectObservable<any[]>;

  public sub;

  constructor(private af: AngularFireDatabase) {
      this.tracker = this.af.object('/days',{ preserveSnapshot: true});
      this.list = this.af.list('/days');
   }

  ngOnInit() {
  }

  add() {
    let last; 
    this.sub = this.tracker.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        last = snapshot.val() + 1;  
        this.tracker.set({day:last}); 
        this.sub.unsubscribe(); 
      });
    });
  }

  minus() {
    let last; 
    this.sub = this.tracker.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        last = snapshot.val() - 1;  
        this.tracker.set({day:last}); 
        this.sub.unsubscribe(); 
      });
    });
  }
}