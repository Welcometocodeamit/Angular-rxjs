import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subjects',
  templateUrl: './behaviour-subjects.component.html',
  styleUrls: ['./behaviour-subjects.component.css']
})
export class BehaviourSubjectsComponent {

  data:dataT[]=[]

  ngOnInit(){
    const subject = new BehaviorSubject<number>(100)

    subject.subscribe((data)=>{
      this.data.push({name:'sub 1 ', value:data})
      console.log(this.data)
    })

    subject.subscribe((data)=>{
      this.data.push({name:'sub 2 ', value:data})
      console.log(this.data)
    })

    subject.next(200)
    subject.subscribe((data)=>{
      this.data.push({name:'sub 3 ', value:data})
      console.log(this.data)
    })

    subject.next(300)
  }

}

export interface dataT{
  name:string,
  value:number
}
