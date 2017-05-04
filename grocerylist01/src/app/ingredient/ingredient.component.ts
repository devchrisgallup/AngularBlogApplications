import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
// imports go here
import { Http } from '@angular/http';
import { RecipepuppyService } from 'app/services/recipepuppy.service'; 

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  // add public property here
  public items: FirebaseListObservable<any[]>;
  public recipe; 
  public searchItem;
  public foodArray;  
  
  constructor(private recipepuppyservice: RecipepuppyService, private af: AngularFire) {
    
   }

  ngOnInit() {
    this.recipepuppyservice.getData('cheese') 
                    .subscribe(data => this.recipe = data.results); 
    this.items = this.af.database.list('/items');
  }

  getData() {
    this.recipepuppyservice.getData(this.searchItem) 
                    .subscribe(data => this.recipe = data.results);
    this.searchItem = ''; 
  }

  add(ingredients) {
    let item = ingredients.split(','); 
    for (let i = 0; i < item.length; i++) {
      this.items.push(item[i]); 
    } 
  }
}