import { Component, OnInit } from '@angular/core';
// imports go here
import { Http } from '@angular/http';
import { OmdbService } from 'app/services/omdb.service'; 

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // add public property here
  public show; 
  public searchItem; 
  
  constructor(private omdbservice: OmdbService) {
    
   }

  ngOnInit() {
    this.omdbservice.getData('goonies') 
                    .subscribe(data => this.show = data); 
  }

  getShow() {
    this.omdbservice.getData(this.searchItem) 
                    .subscribe(data => this.show = data);
    this.searchItem = '';  
  }

}
