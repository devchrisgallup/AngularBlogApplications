import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';

//firebase
import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
import { AngularFireModule } from "angularfire2/angularfire2";
import { firebaseConfig } from './../environments/firebase.config';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    TextComponent
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
