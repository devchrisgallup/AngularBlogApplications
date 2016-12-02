import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContentComponent } from './content/content.component';

// Routes array
const routes: Routes = [
    // default url to content component
    { path: '', pathMatch: 'full', redirectTo: 'content' },

    { path: 'content', component: ContentComponent },
    { path: 'favorite', component: FavoriteComponent },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routingComponents = [ ContentComponent, FavoriteComponent ]