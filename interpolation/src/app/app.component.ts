import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies Are Great!!!';
  names: string[] = ['Gary', 'Wyatt', 'Lisa', 'Chet', 'Deb', 'Ian', 'Hilly'];

  objectOne = {
    "name": "Gary",
    "age": 48, 
    "gender": "Male"
  }
}
