import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { MlbService } from 'app/services/mlb.service'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public game; 
  public dateplayed; 
  public homeName; 
  public awayName; 
  public homecity;
  public awaycity; 
  public awayloss;
  public awaywin; 
  public homeloss;
  public homewin; 
  public score;
  public homescore = 0; 
  public awayscore = 0;  
  public inning; 
  public originalDate = ''; 
  public team = 'Royals'; 
  public teams = ['Royals', 'Cardinals', 'Indians', 'Rockies', 'Mets', 'Rangers', 'Mariners', 'Athletics', 'Orioles', 'Angels', 'Cubs', 'Giants',
                   'Marlins', 'Nationals', 'Yankees', 'Blue Jays', 'Rays', 'Red Sox', 'Pirates', 'Tigers', 'Padres', 'Reds', 'Phillies', 'Braves',
                   'Astros', 'White Sox', 'Twins', 'Brewers', 'Dodgers', 'D-backs'];
  
  constructor(private mlbService: MlbService) { }

  ngOnInit() {
    this.mlbService.getData()
                  .forEach(data => this.game = data.data.games.game);
  }

  ngAfterContentChecked() {
    this.logging(); 
  }
  // date selected by user
  // from the date picker
  rundata() { 
    let datesplit = this.dateplayed.split("-"); 
    let year = datesplit[0];
    let month = datesplit[1]; 
    let day = datesplit[2];
    this.mlbService.getSelectedDate(year, month, day)
                  .forEach(data => this.game = data.data.games.game);
  }

  logging() { 
    // console.log(this.game); 
    this.game.forEach(item =>  {
      if (item.home_team_name == this.team) { 
        this.homecity = item.home_team_city; 
        this.awaycity = item.away_team_city; 
        this.homeName = item.home_team_name;
        this.awayName = item.away_team_name; 
        this.awayloss = item.away_loss; 
        this.awaywin = item.away_win; 
        this.homeloss = item.home_loss; 
        this.homewin = item.home_win; 
        this.inning = item.linescore.inning;
        this.score = item.linescore.inning; 
        this.originalDate = item.original_date; 
      } else if (item.away_team_name == this.team) {
        this.homecity = item.home_team_city; 
        this.awaycity = item.away_team_city;
        this.homeName = item.home_team_name;
        this.awayName = item.away_team_name; 
        this.awayloss = item.away_loss; 
        this.awaywin = item.away_win; 
        this.homeloss = item.home_loss; 
        this.homewin = item.home_win; 
        this.inning = item.linescore.inning;
        this.score = item.linescore.inning;
        this.originalDate = item.original_date; 

      } else {
        // console.log('Your team did not play today.');
      }
    }); 
    // Caculate totals score for each  team
    this.homescore = 0; 
    this.awayscore = 0; 
    this.score.forEach(item => {
      // if NaN 
      if (parseInt(item.home)) {
        this.homescore = this.homescore + parseInt(item.home); 
      } 
      if (parseInt(item.away)) {
        this.awayscore = this.awayscore + parseInt(item.away); 
      } 
    })
  }

}
