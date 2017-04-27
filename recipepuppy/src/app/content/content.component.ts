import { Component, OnInit } from '@angular/core';
// imports go here
import { Http } from '@angular/http';
import { RecipepuppyService } from 'app/services/recipepuppy.service'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // add public property here
  public recipe; 
  public searchItem; 
  
  constructor(private recipepuppyservice: RecipepuppyService) {
    
   }

  ngOnInit() {
    this.recipepuppyservice.getData('onions') 
                    .subscribe(data => this.recipe = data); 
  }
  getData() {
    console.log(this.recipe); 
  }
}
