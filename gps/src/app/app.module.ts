import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './../environments/firebase.config';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SafePipe } from './content/content.component'; 

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AngularFireModule } from "angularfire2/angularfire2";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
