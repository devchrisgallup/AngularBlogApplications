import { Component, OnInit } from '@angular/core';
// import statement here
import { Http } from '@angular/http'; 
// import show model
import { Show } from './shared/models/show'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular HTTP | Observables';
  description = 'TVmaze API';
  shows: Show[]; 


  constructor (private http:Http) {

  }

  ngOnInit() {
    this.http.get('http://api.tvmaze.com/search/shows?q=cat')
      .subscribe(data => {
        this.shows = data.json(); 
      });
  }

  processData(item) {
      return this.http.get('http://api.tvmaze.com/search/shows?q=' + item)
        .subscribe(data => {
          this.shows = data.json(); 
        });
  }

}
