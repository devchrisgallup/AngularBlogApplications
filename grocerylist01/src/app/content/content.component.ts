import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  favoriteItem: FirebaseListObservable<any[]>;
  newItem: string = '';
  newFavorite: string = ''; 
  

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.items = this.af.database.list('/items');
    this.favoriteItem = this.af.database.list('/favoriteItem');
    this.items.subscribe(items => {
        items.forEach(item => {
          console.log('Item: ', item.$value);
          if (item.$value === 'Bacon') {
            console.log('We have Bacon.');
          }
        }); 
    }); 
  }
  
  add() {
    this.items.push(this.newItem);
    this.newItem = '';
  }

  delete(item) {
    this.items.remove(item);
  }
  
  favorite(item) {
    this.favoriteItem.push(item);
  }
}
