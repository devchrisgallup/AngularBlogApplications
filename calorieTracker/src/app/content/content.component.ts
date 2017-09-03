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
  public list: FirebaseListObservable<any[]>;
  public total: FirebaseListObservable<any[]>;
  public remaining: FirebaseListObservable<any[]>;
  public sliderValue: FirebaseListObservable<any[]>;
  public target: FirebaseListObservable<any[]>;
  public calorieAmount; 
  public remainingCalories = 0; 
  public grandTotal = 0; 
  public minValue = 1000;
  public maxValue = 3000;
  public targetValue = 1000; 

  constructor(private listDB: AngularFireDatabase) { 
    var i = 0; 
    console.log('Constructor was called.');
    this.list = this.listDB.list('/item');
    this.total = this.listDB.list('/total'); 
    this.remaining = this.listDB.list('/remaining');
    this.sliderValue = this.listDB.list('/slidervalue');
    this.target = this.listDB.list('/target');
    this.total.forEach(item => {
        for(let i = 0; i < item.length; i++) {
          console.log(item[i].$value); 
         this.grandTotal += parseInt(item[i].$value);
        }
      });
  }

  ngOnInit() {
      console.log('onInit was called.');
      this.list = this.listDB.list('/item');
      this.remainingCalories = this.targetValue - this.grandTotal; 
  }

  targetValueChange() {
    this.sliderValue.remove();
    this.target.remove();
    this.remaining.remove();
    this.remainingCalories = this.targetValue - this.grandTotal;
    this.sliderValue.push(this.targetValue); 
    this.target.push(this.targetValue); 
    this.remaining.push(this.remainingCalories);
  }

  add() {
    this.remaining.remove();
    this.grandTotal = 0; 
    this.total.push(this.calorieAmount);
    this.remainingCalories = this.targetValue - this.grandTotal;
    this.remaining.push(this.remainingCalories);
    this.calorieAmount = ''; 
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
