import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import "rxjs/add/operator/map"

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

// angularfire2 docs
// https://github.com/angular/angularfire2/blob/master/src/auth/auth.ts
export class LoginComponent implements OnInit {

  public user: Observable<firebase.User>;
  public items: FirebaseListObservable<any[]>;
  public messageValue: string = ''; 
  public userUid; 
  public userName;
  public colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; 
  public color = 'red'; 
  public progressVal: number = 0; 

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.user = af.authState;
    this.af.authState.subscribe(auth => {
      this.userUid = auth.uid;
      this.userName = auth.displayName;
    });
   }

  ngOnInit() {
    this.items = this.db.list('/item', {
      query: {
        orderByChild: "date",
        limitToLast: 5,
      }
    });
  }

  login() {
    let size = this.colorArray.length;
    this.getRandomColor(0,size - 1); 
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // reset user information
    this.af.authState.subscribe(auth => {
      this.userUid = auth.uid;
      this.userName = auth.email;
    });
  }

  logout() {
    this.af.auth.signOut();
  }

  sendData(item: string) {
    this.items.push({
      message: item,
      name:this.userName
    });

    this.items = this.db.list('/item', {
      query: {
        orderByChild: "date",
        limitToLast: 5,
      }
    });

    this.messageValue = '';
  }

  fileButton(event) {
    // get file
    let file = event.target.files[0]; 

    // create a storage ref
    let storageRef = firebase.storage().ref('photos/' + file.name); 

    // upload file
    let task = storageRef.put(file); 

    // update progress bar
    task.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      (snapshot) => {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progressVal = percentage; 
        console.log(this.progressVal); 
      },
      (error) => {
        console.log('Error Saving date to firebase storage.');
        this.progressVal = 60; 
      },
      
      () => {
        console.log('Firebase Storage data save success.');
      });
  }

  getRandomColor(top, bottom) { 
    let rand = Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    this.color = this.colorArray[rand]; 
  }
}