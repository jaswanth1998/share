import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessComponent } from './process/process.component';
import { SenditComponent } from './sendit/sendit.component';

import { HomeComponent } from './home/home.component';

import { EditorconfigComponent } from './editorconfig/editorconfig.component';

import { FirebasetestComponent } from './firebasetest/firebasetest.component';

import { AngularComponent } from './angular/angular.component';
import { GetitComponent } from './getit/getit.component';

import { WriteStoryComponent } from './write-story/write-story.component';

import { SubTopicCreateComponent } from './sub-topic-create/sub-topic-create.component';


import { ShowGraphComponent } from './show-graph/show-graph.component';

import { StepperComponent } from './stepper/stepper.component';
import { EditDataComponent } from './edit-data/edit-data.component';


import { StoryBoradComponent } from './story-borad/story-borad.component';


const routes: Routes = [
  {
    path:"storyBorad",
    component:StoryBoradComponent

  },
  {
    path:"Edit",
    component:EditDataComponent

  },
  {
    path:"display_graph",
    component:StepperComponent

  },
  {
    path:"create_sub_topic",
    component:SubTopicCreateComponent
  },
  {
    path:"process",
    component:ProcessComponent
  },
  {
    path:"getit/:id",
    component:GetitComponent
  },
  {
    path:"firebase",
    component:FirebasetestComponent
  },
  {
    path:"angular",
    component:AngularComponent

  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"sendit",
    component: SenditComponent

  },
  {
    path:"editor",
    component:EditorconfigComponent
    
  },
  {
    path:"writeStory",
    component:WriteStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
