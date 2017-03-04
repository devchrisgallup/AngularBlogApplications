import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public af:AngularFire) { }

  ngOnInit() {
  }

  login() {
    this.af.auth.login(); 
  }

  logout() {
    this.af.auth.logout(); 
  }

}
