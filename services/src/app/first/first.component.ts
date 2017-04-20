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
  
  constructor(private omdbservice: OmdbService) {
    
   }

  ngOnInit() {
    this.omdbservice.getData() 
                    .subscribe(data => this.show = data); 
  }

  getShow() {
    console.log(this.show); 
  }

}
