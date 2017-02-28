// import ViewContainerRef from core
import { Component, ViewContainerRef } from '@angular/core';
// add import here
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // inject constructor 
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
  }

  getToastr() {
    // you can use 4 methods for diffrent styles
    // success 
    // error 
    // warning 
    // info
    this.toastr.success('You got Toast!', 'Success!');
  }
}