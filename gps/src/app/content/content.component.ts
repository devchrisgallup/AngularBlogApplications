import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public locationFirebase: FirebaseListObservable<any[]>;
  public lat; 
  public long; 
  public url = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12391.926345121707!2d-94.460829!3d39.0613338!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1494528860800"
  public googleMapString = ''; 
  public passedStopSign = 'Not passed stop sign.'; 
  public locationName;  

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(this.setPosition.bind(this));
      }
    this.locationFirebase = this.af.list('/location');
  }

  setPosition(position) {
    this.lat = parseFloat(position.coords.latitude).toFixed(6); 
    this.long = parseFloat(position.coords.longitude).toFixed(6); 
    if (this.lat > 39.0680940){
      this.passedStopSign = 'Passed stop sign.'; 
    }
  }

  setLocation() {
    let item = {
      lat:this.lat, 
      long:this.long,
      name:this.locationName
    }; 
    this.locationFirebase.push(item);
    this.locationName = ''; 
  }

  deleteLat(item) {
    this.locationFirebase.remove(item);
  }
}
