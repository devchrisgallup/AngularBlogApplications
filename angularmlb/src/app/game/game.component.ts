import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { MlbService } from 'app/services/mlb.service'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public game; 
  public homeName; 
  public awayName; 
  public score;
  public homescore = 0; 
  public awayscore = 0;  
  public inning;  
  constructor(private mlbService: MlbService) { }

  ngOnInit() {
    this.mlbService.getData()
                  .forEach(data => this.game = data.data.games.game);
  }

  ngAfterContentChecked() {
    this.logging(); 
  }

  logging() {
    console.log('called'); 
    this.game.forEach(item =>  {
      if (item.home_team_name == 'Royals') {
        this.homeName = item.home_team_name;
        this.awayName = item.away_team_name; 
        this.inning = item.linescore.inning;
        this.score = item.linescore.inning;  
      } else if (item.away_team_name == 'Royals') {
        this.homeName = item.home_team_name;
        this.awayName = item.away_team_name; 
        this.inning = item.linescore.inning;
        this.score = item.linescore.inning;
      } else {
        console.log('Your team did not play today.');
      }
    }); 
    // Caculate 
    this.score.forEach(item => {
      if (parseInt(item.home)) {
        this.homescore = this.homescore + parseInt(item.home); 
      } else {
        this.homescore = this.homescore; 
      }
      if (parseInt(item.away)) {
        this.awayscore = this.awayscore + parseInt(item.away); 
      } else {
        this.awayscore = this.awayscore; 
      }
    })
  }

}
