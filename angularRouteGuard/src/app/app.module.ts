import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { StatsComponent } from './stats/stats.component';

import { AppRoutingModule, routingComponents } from './route'

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    StatsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'canDeactivateStats', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:StatsComponent) {
  if (component.isSaved == false) {
    alert('You have unsaved data, please save your data.'); 
  }
  return component.isSaved; 
}

