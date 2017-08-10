import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MlbService } from './services/mlb.service'; 

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { GameComponent } from './game/game.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    GameComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MlbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
