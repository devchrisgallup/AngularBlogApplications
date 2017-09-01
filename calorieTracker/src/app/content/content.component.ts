import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [
    AngularFireDatabase
  ]
})
export class ContentComponent implements OnInit {

  public list: FirebaseListObservable<any[]>;

  constructor(private listDB: AngularFireDatabase) { 
    this.list = this.listDB.list('/item');
  }

  ngOnInit() {
      this.list = this.listDB.list('/item');
  }

  display() {
    this.list.forEach(item => {
      console.log(item); 
    })
  }

}
