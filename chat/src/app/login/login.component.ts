import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireModule
  ]
})
export class LoginComponent implements OnInit {

  public user: Observable<firebase.User>;
  public items: FirebaseListObservable<any[]>;
  public messageValue: string = ''; 

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.user = af.authState;
   }

  ngOnInit() {
    this.items = this.db.list('/item', {
      query: {
        limitToLast: 50
      }
    });
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this.items); 
  }

  logout() {
    this.af.auth.signOut();
  }

  sendData(item: string) {
    this.items.push({message: item}); 
    this.messageValue = ''; 
  }

}