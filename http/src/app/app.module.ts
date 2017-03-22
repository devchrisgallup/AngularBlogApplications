import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // add services to the 
  // providers array
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
