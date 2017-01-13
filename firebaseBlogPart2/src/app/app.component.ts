import { Component } from '@angular/core';
// added imports
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery List';
  // reference to observable
  items : FirebaseListObservable<any[]>;
  // dependency injection
  constructor(private af: AngularFire) {
    this.items = af.database.list('/items');
  }
}
