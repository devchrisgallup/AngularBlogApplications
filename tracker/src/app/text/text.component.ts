import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  // database list items
  public list: FirebaseListObservable<any[]>;
  public textstring:string; 

  constructor(private af: AngularFireDatabase) {
    this.list = this.af.list('/text');
   }

  ngOnInit() {
  }

  addtext() {
    console.log('works ' + this.textstring); 
    this.list.push(this.textstring); 
    this.textstring = ''; 
  }

}
