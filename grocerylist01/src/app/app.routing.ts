// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components that we want to route
import { FavoriteComponent } from './favorite/favorite.component';
import { ContentComponent } from './content/content.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { PageNotFoundComponent } from './not-found-component';

// Routes array
const routes: Routes = [
    // The router selects the route with a first match wins strategy. 
    // Wildcard routes are the least specific routes in the route configuration. 
    // Be sure it is the last route in the configuration.
    { path: 'content', component: ContentComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'ingredient', component: IngredientComponent },
    { path: '', pathMatch: 'full', redirectTo: 'content' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routingComponents = [ ContentComponent, FavoriteComponent, IngredientComponent ]