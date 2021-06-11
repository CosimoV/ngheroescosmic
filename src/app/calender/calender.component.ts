import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  public value: Date;

  constructor() { }
  

  ngOnInit(): void {
    
  }

}
