import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
// imports go here
import { Http } from '@angular/http';
import { RecipepuppyService } from 'app/services/recipepuppy.service'; 
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  // add public property here
  public items: FirebaseListObservable<any[]>;
  public lastSearch: FirebaseListObservable<any[]>;
  public recipe; 
  public searchItem;
  public foodArray;  
  
  constructor(private recipepuppyservice: RecipepuppyService, private af: AngularFire,public toastr: ToastsManager,private vRef:ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.searchItem = localStorage.getItem('lastSearch'); 
    this.items = this.af.database.list('/items');
    this.recipepuppyservice.getData(this.searchItem) 
                    .subscribe(data => this.recipe = data.results); 
  }

  getData() {
    this.recipepuppyservice.getData(this.searchItem) 
                    .subscribe(data => this.recipe = data.results);
    localStorage.setItem('lastSearch', this.searchItem); 
    this.searchItem = ''; 
  }

  add(ingredients) {
    let item = ingredients.split(','); 
    for (let i = 0; i < item.length; i++) {
      this.items.push(item[i]); 
    }
    this.toastr.success('You have added Item(s) to Grocery List.', 'Success!'); 
  }
}