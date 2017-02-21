import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContentComponent } from './content/content.component'
import { NavComponent } from './nav/nav.component' 
import { StatsComponent } from './stats/stats.component'

const routes: Routes = [
    // default url to content component
    { path: '', pathMatch: 'full', redirectTo: 'content' }, 
    { path: 'content', component: ContentComponent },
    { path: 'stats', component: StatsComponent, canDeactivate: ['canDeactivateStats'] }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routingComponents = [ ContentComponent, StatsComponent ]