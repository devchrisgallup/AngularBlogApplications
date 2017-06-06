import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// if Angular 4 upgrade
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './not-found-component'; 
// imports
import { FavoriteComponent } from './favorite/favorite.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipepuppyService } from 'app/services/recipepuppy.service'; 



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    FavoriteComponent,
    // add to our declarations
    routingComponents,
    IngredientComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    // add to our imports
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    RecipepuppyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
