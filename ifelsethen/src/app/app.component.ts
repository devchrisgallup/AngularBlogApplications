import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = true; 
  userName = "Luke"; 
  force = ''; 
  title = true;

  chageTheDay() {
    if (this.title == true) {
      this.title = false; 
    } else if (this.title == false) {
      this.title = true; 
    }
  }

  log() {
    if (this.user == true) {
      this.user = false; 
    } else if (this.user == false) {
      this.user = true; 
    }
  }
}
