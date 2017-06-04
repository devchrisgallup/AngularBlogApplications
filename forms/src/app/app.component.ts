import { Component } from '@angular/core'; 
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {}
  submitData(item) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    console.log(item); 
    return this.http.get('https://chrisgalluptest.info/angularform/contactengine.php?firstname=chrisgallup');
  }
}
