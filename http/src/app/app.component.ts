import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user'; 
import { UserService } from './services/user.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userData: string;
  title = 'Angular HTTP | Observables';
  description = 'TVmaze API';
  users: User[]; 

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.service.getData('dog')
      .subscribe(data => this.users = data);
  }
  
  processData(item) {
    this.service.getData(item)
      .subscribe(data => this.users = data);
  }
}
