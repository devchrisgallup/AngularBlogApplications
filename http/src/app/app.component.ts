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
  title = 'Angular HTTP | Observables';
  users: User[]; 

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.service.getData()
      .subscribe(data => this.users = data);
  }
}
