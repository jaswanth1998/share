import { Component, OnInit } from '@angular/core';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import * as firebase from "firebase"


interface bringIt {
  data: String[]
}



@Component({
  selector: 'app-iotcomponent',
  templateUrl: './iotcomponent.component.html',
  styleUrls: ['./iotcomponent.component.css']
})
export class IotcomponentComponent implements OnInit {

  displayData: String[] = []
  check: boolean = true;
  mapKey: string = "Start"
  displayMap = new Map();
  checkaddEditdata: boolean = true;
  selected = 'option2';
  dropDownData: String[] = [];
  displayTheSecondHalf: String[] = []
  addTheString: String = "";
  seeDataSeleted: String = "";

  constructor(


    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.getIt("start", false);
    this.getStartKey();
  }
  getSecondHalf(getItem) {
    var getData = this.afs.collection("IotFrom").doc(getItem).valueChanges();
    getData.subscribe(
      (doc: bringIt) => {
        try {
          console.log(doc.data.length);
          if (doc.data.length > 0) {
            this.displayTheSecondHalf = doc.data;
          } else {
            this.displayTheSecondHalf = ["No data"]
          }



        } catch (error) {
          this.displayTheSecondHalf = ["No data"]

        }

      }
    )


  }
  addEditData(checkadd) {
    if (!checkadd) {
      this.getIt("start", false);
      this.getStartKey();

    }

    this.checkaddEditdata = checkadd;

  }

  getStartKey() {
    var getData = this.afs.collection("IotFrom").doc("allKeys").valueChanges();
    getData.subscribe(
      (doc: bringIt) => {
        console.log(doc.data);
        this.dropDownData = doc.data;
      }
    )


  }

  getItData(KeyRole, boolcheck) {
    this.seeDataSeleted = KeyRole;

  }
  getIt(KeyRole, boolcheck) {
    console.log(KeyRole)
    if (boolcheck) {
      this.displayMap.set(this.mapKey, KeyRole)
      this.mapKey = KeyRole;
    }



    var reciveData = this.afs.collection("IotFrom").doc(KeyRole).get()
    reciveData.subscribe(
      (doc) => {
        console.log("i am here")

        if (doc.exists) {
          try {
            if(doc.data().data.length>0){
              this.check = true;
              console.log(doc.data().data);
              this.displayData = doc.data().data;

            }else{

              this.check = false
            }
          } catch (error) {
            this.check = false
          }
       
        } else {
          this.check = false
        }
      }
    )

  }

  addTheValue(value) {
    console.log(value)
    console.log(this.selected)
    this.addTheString = ""
    if (this.displayTheSecondHalf[0] == "No data") {
      this.afs.collection("IotFrom").doc(this.selected).set(
        {
          data: [value]

        }
      )
      this.afs.collection("IotFrom").doc(value).set({

      })

    } else {

      this.afs.collection("IotFrom").doc(value).set({

      })

      this.afs.collection("IotFrom").doc(this.selected).update(
        {
          data: firebase.firestore.FieldValue.arrayUnion(value)

        }
      )
    }
    this.afs.collection("IotFrom").doc("allKeys").update(
      {
        data: firebase.firestore.FieldValue.arrayUnion(value)

      }
    )
  }

  deleteTheItem(value) {

    this.afs.collection("IotFrom").doc(this.selected).update(
      {
        data: firebase.firestore.FieldValue.arrayRemove(value)

      }
    )
    this.afs.collection("IotFrom").doc("allKeys").update(
      {
        data: firebase.firestore.FieldValue.arrayRemove(value)

      }
    )
    this.afs.collection("IotFrom").doc(value).delete()
  }
}
