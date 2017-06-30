import { Component } from '@angular/core';

@Component({
  template: `<h2 class="centertext">Page not found</h2>
             <div class="centertext">
             <button class="btn" [routerLink]="['/']">Home</button>
             </div>`
})
export class PageNotFoundComponent {}