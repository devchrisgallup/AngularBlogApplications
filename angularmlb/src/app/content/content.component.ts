import { Component, OnInit } from '@angular/core';
import { MlbService } from 'app/services/mlb.service'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public game; 

  constructor(private mlbService: MlbService) { }

  ngOnInit() {
    this.mlbService.getData()
                   .subscribe(data => this.game = data); 
  }

  logging() {
    console.log(this.game); 
  }

}
