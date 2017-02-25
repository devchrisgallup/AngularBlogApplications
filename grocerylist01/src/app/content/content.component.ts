import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items : FirebaseListObservable<any[]>;
  favoriteItem: FirebaseListObservable<any[]>;
  newItem: string = '';
  newFavorite: string = '';
  

  constructor(private af: AngularFire, public toastr: ToastsManager,private vRef:ViewContainerRef) {
    const items$ = af.database.object('/items');
    this.toastr.setRootViewContainerRef(vRef);
    console.log(VERSION.full);
  }

  ngOnInit() {
    this.items = this.af.database.list('/items');
    this.favoriteItem = this.af.database.list('/favoriteItem'); 
  }
  
  add() {
    this.items.push(this.newItem);
    this.newItem = '';
  }

  delete(item) {
    this.items.remove(item);
  }
  
  favorite(item) {
    this.toastr.success('You have a new Favorites Item.', 'Success!');
    this.favoriteItem.push(item);
  }
}
