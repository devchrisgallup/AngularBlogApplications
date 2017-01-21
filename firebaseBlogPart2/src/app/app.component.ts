import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery List';
  // new item variable
  newItem: string = ''; 

  items : FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.items = af.database.list('/items');
  }
  // this method is called by a eventlistner
  // when user presses the enter key
  add() {
    this.items.push(this.newItem); 
    this.newItem = ''; 
  }
  // this method is called by a eventlistner
  // when clicks the delete X button
  delete(item) {
    this.items.remove(item);
  }
}
