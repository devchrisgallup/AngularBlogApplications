import { Component, OnInit } from '@angular/core';
// imports go here
import { Http } from '@angular/http';
import { OmdbService } from 'app/services/omdb.service'; 

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public show; 
  constructor(private omdbservice: OmdbService) { 

  }

  ngOnInit() {
    this.omdbservice.getData()
                    .subscribe(data => this.show = data);
  }

}
