import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private af: AngularFire, public toastr: ToastsManager,private vRef:ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vRef);
  }

  items: FirebaseListObservable<any[]>;
  groceryList: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.items = this.af.database.list('/favoriteItem');
    this.groceryList = this.af.database.list('/items');
  }

  add(item) {
    this.toastr.success('Added to Grocery List.', 'Success!', {});
    this.groceryList.push(item);
  }

  delete(item) {
    this.items.remove(item);
  }

}
