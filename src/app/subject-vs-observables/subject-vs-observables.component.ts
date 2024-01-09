import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-subject-vs-observables',
  templateUrl: './subject-vs-observables.component.html',
  styleUrls: ['./subject-vs-observables.component.css']
})
export class SubjectVsObservablesComponent {

  constructor(private http:HttpClient){}

  data:any

  

  ngOnInit(){
    const obs = new Subject()
    const data = ajax('https://randomuser.me/api/')
    data.subscribe((res)=>{console.log(res); console.log('data from observable 1')})
    data.subscribe((res)=>{console.log(res); console.log('data from observable 2')})
    data.subscribe((res)=>{console.log(res); console.log('data from observable 3')})
    data.subscribe(obs)

    obs.subscribe((res)=>{console.log(res); console.log('data from subject 1')})
    obs.subscribe((res)=>{console.log(res); console.log('data from observable 2')})
    obs.subscribe((res)=>{console.log(res); console.log('data from observable 3')})



  }

}
