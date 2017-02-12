import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items : FirebaseListObservable<any[]>;
  // create FirebaseListObservable reference  
  favoriteItem: FirebaseListObservable<any[]>
  title = 'Grocery List';
  newItem: string = ''; 

  constructor(private af: AngularFire) {

  }

  ngOnInit() {
    this.favoriteItem = this.af.database.list('/favoriteItem'); 
    this.items = this.af.database.list('/items');
  }
  add() {
    this.items.push(this.newItem); 
    this.newItem = ''; 
  }
  delete(item) {
    this.items.remove(item);
  }

  // using the value that is being 
  // passed in and push it to the
  // firebase database
  favorite(item) { 
    this.favoriteItem.push(item); 
  }
}
