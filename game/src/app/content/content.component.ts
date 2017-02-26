import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items:FirebaseListObservable<any[]>; 
  score:FirebaseListObservable<any[]>; 
  newItem = ''; 
  numberOfTries = 0; 

  constructor(private af: AngularFire) { 
    this.items = this.af.database.list('/items'); 
    this.score = this.af.database.list('/score'); 
  }

  ngOnInit() {
    this.items.forEach(element => {
      for (let i = 0; i < element.length; i++) {
        if (element[3].$value == this.newItem && this.newItem !== '') {
          this.score.remove(''); 
          this.score.push(this.numberOfTries);
          this.numberOfTries = 0; 
          this.newItem = '';  
        } else {
          this.newItem = ''; 
        }
        if (element[i].$value == '') {
          this.items.remove(element[i]); 
        }
      }
    });
  }
  checkEntry() {
    this.numberOfTries++;  
    this.items.push(''); 
  }
}
