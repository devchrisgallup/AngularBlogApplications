import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
      this.items = af.database.list('/items');
   }

  ngOnInit() {
  }

}
