import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  cameraScensor:String[] = [
  "SONY IMX178 (Ethernet Camera)",
    "RaspberryPi Camera",
    "Logitech USB  Camera",
  ];
  SensorTimeSeries:String[]=[
    "KIONX112 (High Sampling)",
"Temp Sensor:DS18B20"     ,
"Sensor simulator"
  ];
  SensorRadar:String[]= [
  "  Radar",
"PD300 : 80 ft ",
"XeThru 30ft "
  ]
  ActionMsg : String[]= [
   " Alert to Mobile User",
"Alert to Service Engineer",
"Alert to Inventry Manager",
"Alert to Site Manager",
  ]
  Action:String[]= [
    "Motor Cutoff",
    "Audio Alarm",
    "Operate Lock",
    "Boiler CutOff",
  ]
  SensorActuator:String[]= [
    "MagneticLock",
"Relay"
  ];
  DevicesIntel:String[]=[
    "X86 Architecture",
    "UTX3115: Intel® Atom™"      ,
     "ReliaGATE 20-25 ,Intel Atom" ,
    "HPE Industrial PC-i5 8GB "
  ];
  DevicesARM:String[]=[
    "Raspberry pi Zero:        ",
"Raspberry pi 3 b+:       ",
"Raspberry pi 4 :             ",
"Jetson Tegra TK2:         ",
"Jetson Nano:                  ",
"FATBOX G3 - 3G : ",

  ]

  mainArray =[
    "SensorCamera",
    "SensorTimeSeries",
    "SensorRadarz",
    "ActionMsg",
    "Action",
    "SensorActuator",
    "DevicesIntel",
    "DevicesARM",
    "DataStorage",
    "Language",

  ] ;
  map = new Map(
   [ 
     ["cameraScensor",
     [ "SONY IMX178 (Ethernet Camera)",
     "RaspberryPi Camera",
     "Logitech USB  Camera",]
    
    ],["SensorTimeSeries",[
      "KIONX112 (High Sampling)",
"Temp Sensor:DS18B20"     ,
"Sensor simulator"
    ]]
  
  ,
  ["SensorRadar",
  [   "  Radar",
  "PD300 : 80 ft ",
  "XeThru 30ft "]
 
 ],

 ["ActionMsg",
  [      " Alert to Mobile User",
  "Alert to Service Engineer",
  "Alert to Inventry Manager",
  "Alert to Site Manager",]
 
 ],
 ["Action",
 [     "Motor Cutoff",
 "Audio Alarm",
 "Operate Lock",
 "Boiler CutOff",]

],
["SensorActuator",
[    "MagneticLock",
"Relay"]

],
["DevicesIntel",
[    "X86 Architecture",
"UTX3115: Intel® Atom™"      ,
 "ReliaGATE 20-25 ,Intel Atom" ,
"HPE Industrial PC-i5 8GB "

],


  ]]

    
  )
    
  finalMap = new Map()
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  addIt(key,value){
this.finalMap.set(key,value);

  }
  consoleIt(){
    console.log(this.finalMap);
  }

}
