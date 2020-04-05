import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from '@angular/material/dialog';
import { AngularComponent } from './angular/angular.component';
import { AngulardialogueComponent } from './angulardialogue/angulardialogue.component';

import { FormsModule } from '@angular/forms';
import { ProcessComponent } from './process/process.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { SenditComponent } from './sendit/sendit.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatButtonModule} from '@angular/material/button';
import { EditorconfigComponent } from './editorconfig/editorconfig.component';
import { HomeComponent } from './home/home.component';

// import {QuillInitializeService} from "./quill-initialize.service";

import { QuillModule } from 'ngx-quill'

import { ReactiveFormsModule } from '@angular/forms';
import { FirebasetestComponent } from './firebasetest/firebasetest.component';



import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import {MatSelectModule} from '@angular/material/select';
import { GetitComponent } from './getit/getit.component';
import { WriteStoryComponent } from './write-story/write-story.component';
import { SubTopicCreateComponent } from './sub-topic-create/sub-topic-create.component';
import { ShowGraphComponent } from './show-graph/show-graph.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { EditDataComponent } from './edit-data/edit-data.component';

import { StoryBoradComponent } from './story-borad/story-borad.component';
import { IotcomponentComponent } from './iotcomponent/iotcomponent.component';
import { IotFromComponent } from './iot-from/iot-from.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    AngulardialogueComponent,
    ProcessComponent,
    SenditComponent,
    EditorconfigComponent,
    HomeComponent,
    FirebasetestComponent,
    GetitComponent,
    WriteStoryComponent,
    SubTopicCreateComponent,
    ShowGraphComponent,
    StepperComponent,
    EditDataComponent,
    StoryBoradComponent,
    IotcomponentComponent,
    IotFromComponent
  ],
  imports: [
    BrowserModule,
    NgxGraphModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSelectModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatDialogModule,
    FormsModule ,
    NgbModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule

  ],
  entryComponents: [
    AngulardialogueComponent
  
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
