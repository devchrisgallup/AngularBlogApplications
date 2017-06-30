import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // Observables
  items: FirebaseListObservable<any[]>;
  favoriteItem: FirebaseListObservable<any[]>;

  newItem: string = '';
  newFavorite: string = '';
  counter: number = 1; 
  

  constructor(private af: AngularFire, public toastr: ToastsManager,private vRef:ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    // set keys in order to modify their values 
    this.items = this.af.database.list('/items');
    this.favoriteItem = this.af.database.list('/favoriteItem'); 
  }
  

  // add or remove database values
  add() {
    this.items.push(this.newItem); 
    this.newItem = ''; 
    console.log(this.items); 
  }

  delete(item) {
    this.items.remove(item);
  }
  
  favorite(item) {
    this.toastr.success('You have a new Favorite Item.', 'Success!');
    this.favoriteItem.push(item);
  }
}
