import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.css']
})
export class WriteStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  markIt(value){
    console.log("i am working ",value);
  }
}
