import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MlbService } from './services/mlb.service'; 
import { YoutubeService } from './services/youtube.service';
import { SafePipe } from '../safe.pipe';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { GameComponent } from './game/game.component';
import { NewsComponent } from './news/news.component';
import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    GameComponent,
    NewsComponent,
    SafePipe,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MlbService,
    YoutubeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
