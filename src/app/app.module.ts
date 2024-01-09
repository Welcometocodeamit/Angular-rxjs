import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { SubjectsComponent } from './subjects/subjects.component';
import { S1Component } from './subjects/s1/s1.component';
import { C2Component } from './subjects/c2/c2.component';
import { FormsModule } from '@angular/forms';
import { SubjectVsObservablesComponent } from './subject-vs-observables/subject-vs-observables.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviourSubjectsComponent } from './behaviour-subjects/behaviour-subjects.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectsComponent } from './async-subjects/async-subjects.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SubjectsComponent,
    S1Component,
    C2Component,
    SubjectVsObservablesComponent,
    BehaviourSubjectsComponent,
    ReplaySubjectComponent,
    AsyncSubjectsComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
