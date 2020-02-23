import { Component, OnInit } from '@angular/core';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';


interface createNode{
  id: String;
  label: String;

}
@Component({
  selector: 'app-show-graph',
  templateUrl: './show-graph.component.html',
  styleUrls: ['./show-graph.component.css']
})

export class ShowGraphComponent implements OnInit {
  curve: any =shape.curveStepAfter;
  pushNode:any;
  displaynodes = [];
  pushLink:any;
  binding:any;
  zoomToFit$: Subject<boolean> = new Subject();
  
  nodes= []

  links = []
  
  constructor() { }

  ngOnInit() {
  }
  addNode(value){
    console.log("i am ok")
    this.displaynodes.push(value);
    this.binding = ""

    this.pushNode = {
      id: value,
      label: value
      
    }
    this.pushLink = {
      id: value+"s",
      source: 'first',
      target: value,
      label: 'custom label'

    }
this.nodes.push(this.pushNode);

this.nodes=[...this.nodes];



  }

  clicked(value){
    console.log("iamclike"+value)
  }
  linkIt(item,value,linkLabeltodisplay){

    console.log("iamclike"+value,item)

if (linkLabeltodisplay.length >1){
  this.pushLink = {
    id: value+"s",
    source: item,
    target: value,
    label: linkLabeltodisplay

  }
}else{


    this.pushLink = {
      id: value+"s",
      source: item,
      target: value,
      label: 'custom label'

    }
  }
    this.links.push(this.pushLink);
    this.links = [...this.links];



  }
}
