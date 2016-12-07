import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private af: AngularFire) { }

  items: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.items = this.af.database.list('/favoriteItem');
  }

  delete(item) {
    this.items.remove(item);
  }

}
