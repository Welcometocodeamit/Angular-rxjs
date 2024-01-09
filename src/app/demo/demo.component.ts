import { Component } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {


  dataSource:any[]=[]

  errorM?:string

  completeM?:string

 

  myObservable= new Observable((observer)=>{
    setTimeout(()=>{ observer.next({id:1, name:'Amit', age:24, course:"FSD"})},1000) 
    setTimeout(()=>{ observer.next({id:2, name:'Sumit', age:23, course:"BD"})}, 2000 )
    setTimeout(()=>{ observer.next({id:3, name:'Yash', age:21, course:"CD"})}, 3000 )
    // setTimeout(()=>{observer.error(new Error('something wents wrong'))}, 3000)
    setTimeout(()=>{ observer.next({id:4, name:'Suresh', age:21, course:"GD"})}, 4000 )
    setTimeout(()=>{ observer.next({id:5, name:'Yogesh', age:25, course:"FD"})}, 5000 )
    setTimeout(()=>{observer.complete()}, 6000)
  })

  // dataSouce=this.myObservable

  array1:number[]=[1,1,2,3,4,5,7]

  getData(){
    this.myObservable.subscribe({
      next:(value:any)=>{
        this.dataSource.push(value)
        console.log(value)
      },
      error:(err)=>{
        this.errorM=err.message
        console.log(this.errorM)
      },
      complete:()=>{
        this.completeM='All data is streamed'
        console.log(this.completeM)
      }
    })
  }

  myPromise= new Promise((resolve, reject)=>{
    resolve([1,2,3,4,5,6,7])
  })

  // myObservable=of(this.array1)

  // myObservable = from(this.array1)

  // myObservable=from(this.myPromise)

  myThirdObservable = from([5,3,8,4,9])
  mySecondObservable=this.myThirdObservable.pipe(map((value)=>{
    return value*4
  }),
  filter((element)=>{
    return element%3==0
  }))

  myFilterObservable=this.myThirdObservable.pipe(filter((element)=>{
    return element%10==0
  }))

}
