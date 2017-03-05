import { Component, OnInit, ViewContainerRef } from '@angular/core';
// added import
import { AngularFire } from 'angularfire2'; 
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // inject the constructor with AgularFire service
  constructor(public af:AngularFire, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr); 
  }

  ngOnInit() {
  }
  // to login using the popup method that we
  // set in the config object inside of app.module.ts. 
  login(auth) {
    if (auth) {
      this.toastr.success('You are Logged In!', 'Success!');
    }
    this.af.auth.login(); 
  }
  
  logout() {
    this.toastr.success('You have Logged Out!', 'Success!');
    this.af.auth.logout(); 
  }
}
