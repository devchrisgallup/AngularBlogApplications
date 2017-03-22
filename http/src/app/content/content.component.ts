import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from 'app/shared/models/user'; 
import { UserService } from 'app/services/user.service';
 
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  userData: string;
  title = 'Angular HTTP | Observables';
  description = 'TVmaze API';
  users: User[]; 

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.service.getData('ncsi')
      .subscribe(data => this.users = data);
  }
  
  processData(item) {
    this.service.getData(item)
      .subscribe(data => this.users = data);
  }
}
