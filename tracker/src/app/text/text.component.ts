import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  // database list items
  public name: FirebaseListObservable<any[]>;
  public field: FirebaseListObservable<any[]>;
  public textstring:string; 
  public namestring:string;
  public textbool: boolean; 

  constructor(private af: AngularFireDatabase) {
    this.name = this.af.list('/name');
   }

  ngOnInit() {
  }

  addtext() {
    let item = {
      name:this.namestring, 
      text:this.textstring
    }
    this.textbool = true; 
    this.name.push(item); 
    this.namestring = '';
    this.textstring = ''; 
  }

  cleartext() {
    this.textbool = false; 
    this.name.remove(); 
  }

}
