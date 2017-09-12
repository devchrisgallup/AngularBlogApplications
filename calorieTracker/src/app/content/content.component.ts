import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [
    AngularFireDatabase
  ]
})
export class ContentComponent implements OnInit {
  // Firebase Observables
  public list: FirebaseListObservable<any[]>;
  public total: FirebaseListObservable<any[]>;
  public remaining: FirebaseListObservable<any[]>;
  public sliderValue: FirebaseListObservable<any[]>;
  public target: FirebaseListObservable<any[]>;
  public calorieAmount; 
  public remainingCalories = 0; 
  public grandTotal = 0; 
  // input range variables
  public minValue = 1000;
  public maxValue = 3000;
  public targetValue = 1000; 

  constructor(private listDB: AngularFireDatabase) { 
    var i = 0; 
    this.list = this.listDB.list('/item');
    this.total = this.listDB.list('/total'); 
    this.remaining = this.listDB.list('/remaining');
    this.sliderValue = this.listDB.list('/slidervalue');
    this.target = this.listDB.list('/target');
    // calculate total stored in firebase database
    this.total.forEach(item => {
        for(let i = 0; i < item.length; i++) {
         this.grandTotal += parseInt(item[i].$value);
        }
      });
  }

  ngOnInit() {
      this.list = this.listDB.list('/item');
      this.remainingCalories = this.targetValue - this.grandTotal; 
  }
  // input range
  // set target value
  targetValueChange() {
    this.sliderValue.remove();
    this.target.remove();
    this.remaining.remove();
    this.remainingCalories = this.targetValue - this.grandTotal;
    this.sliderValue.push(this.targetValue); 
    this.target.push(this.targetValue); 
    this.remaining.push(this.remainingCalories);
  }

  // minus one calorie from input range
  minusOne() {
    this.targetValue--; 
    this.sliderValue.remove();
    this.target.remove();
    this.remaining.remove();
    this.remainingCalories = this.targetValue - this.grandTotal;
    this.sliderValue.push(this.targetValue); 
    this.target.push(this.targetValue); 
    this.remaining.push(this.remainingCalories);
  }

  // add one calorie to input range
  plusOne() { 
    this.targetValue++; 
    this.sliderValue.remove();
    this.target.remove();
    this.remaining.remove();
    this.remainingCalories = this.targetValue - this.grandTotal;
    this.sliderValue.push(this.targetValue); 
    this.target.push(this.targetValue); 
    this.remaining.push(this.remainingCalories);
  }

  add() {
    let value = parseInt(this.calorieAmount); 
    if (Number.isInteger(value)) {
      this.remaining.remove();
      this.grandTotal = 0; 
      this.total.push(this.calorieAmount);
      this.remainingCalories = this.targetValue - this.grandTotal;
      this.remaining.push(this.remainingCalories);
      this.calorieAmount = ''; 
    } else {
      this.calorieAmount = ''; 
    }
  }

  removeAll() {
    let zero = 0; 
    this.sliderValue.remove();
    this.target.remove();
    this.remaining.remove();
    this.total.remove();
    this.sliderValue.push(zero);
    this.target.push(zero);
    this.remaining.push(zero);
    this.total.push(zero); 
    this.grandTotal = 0;
  }

}
