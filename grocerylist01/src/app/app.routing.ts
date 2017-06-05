// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components that we want to route
import { FavoriteComponent } from './favorite/favorite.component';
import { ContentComponent } from './content/content.component';
import { IngredientComponent } from './ingredient/ingredient.component';

// Routes array
const routes: Routes = [
    // default url to content component
    { path: '', pathMatch: 'full', redirectTo: 'content' },
    { path: "**", redirectTo: 'content' },
    { path: 'content', component: ContentComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'ingredient', component: IngredientComponent },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routingComponents = [ ContentComponent, FavoriteComponent, IngredientComponent ]