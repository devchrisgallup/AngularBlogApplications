import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private dataUrl: string = 'http://api.tvmaze.com/search/shows?q=';
  private tvshow; 
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://api.tvmaze.com/search/shows?q=teenage mutant ninja turtles').subscribe(data => this.tvshow = data.json());
  }
  processData(movie) {
    this.http.get(this.dataUrl + movie).subscribe(data => this.tvshow = data.json());
  }
}
