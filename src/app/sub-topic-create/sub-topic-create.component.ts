import { Component, OnInit } from '@angular/core';
import { GiveItService } from '../give-it.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sub-topic-create',
  templateUrl: './sub-topic-create.component.html',
  styleUrls: ['./sub-topic-create.component.css']
})
export class SubTopicCreateComponent implements OnInit {
  topics;
   selected;
   subTopicValue;
  constructor( 
    private showIt:GiveItService,
    private db:AngularFirestore,
  ) { }

  ngOnInit() {
    
      this.topics=this.showIt.getTopics();
    
      console.log(this.topics);
  }
  createIt(){
    console.log(this.selected+"Array"),
    console.log(this.subTopicValue),
   
    this.db.collection(this.selected+"Array").doc(this.subTopicValue).set({
      Value:[]
    }).then(
      (data)=>{
        this.selected="";
        this.subTopicValue = ""
        console.log(data)
      }
    ).catch(
      (e)=>{
        console.log(e);
      }
    )
    this.db.collection("subTopic").doc(this.selected).update({
      data: firebase.firestore.FieldValue.arrayUnion(this.subTopicValue ),
    }).then(()=>{
      console.log("sucess1")
    }).catch((e)=>{
      console.log(e);
    })

  }
  
}
