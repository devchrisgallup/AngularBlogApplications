import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PlayeroneComponent } from './playerone/playerone.component';
import { PlayertwoComponent } from './playertwo/playertwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PlayeroneComponent,
    PlayertwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
