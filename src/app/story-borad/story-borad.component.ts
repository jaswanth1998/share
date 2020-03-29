import { Component, OnInit } from '@angular/core';

import * as ran from 'random-words'

@Component({
  selector: 'app-story-borad',
  templateUrl: './story-borad.component.html',
  styleUrls: ['./story-borad.component.css']
})
export class StoryBoradComponent implements OnInit {
  dispalyData:String[];
  constructor() { }

  ngOnInit() {
    console.log("i am condo")
  console.log(ran(10))
  this.dispalyData = ran(8);

  }

}
