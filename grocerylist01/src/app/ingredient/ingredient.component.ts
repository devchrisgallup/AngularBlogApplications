import { Component, OnInit } from '@angular/core';
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
  public recipe; 
  public searchItem;
  public foodArray;  
  
  constructor(private recipepuppyservice: RecipepuppyService) {
    
   }

  ngOnInit() {
    this.recipepuppyservice.getData('cheese') 
                    .subscribe(data => this.recipe = data.results); 
  }

  getData() {
    this.recipepuppyservice.getData(this.searchItem) 
                    .subscribe(data => this.recipe = data.results);
    this.searchItem = ''; 
  }

  add(item) {
    console.log(item); 
  }
}