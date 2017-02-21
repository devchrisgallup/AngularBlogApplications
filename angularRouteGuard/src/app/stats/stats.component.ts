import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  isSaved:boolean = false
  constructor() { }

  ngOnInit() {
  }

  saveData() {
    this.isSaved = true; 
    console.log(this.isSaved);
  }

}
