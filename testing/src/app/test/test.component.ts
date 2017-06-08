import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title: string = 'Welcome'; 

  add15(input:number):number {
    return input + 15; 
  }

  constructor() { }

  ngOnInit() {
  }

}
