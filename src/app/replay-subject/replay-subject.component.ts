import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { dataT } from '../behaviour-subjects/behaviour-subjects.component';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {

  data:dataT[]=[]


  

  ngOnInit(){
    const subject = new ReplaySubject<number>(2)

    subject.next(10)
    subject.next(20)
    subject.next(30)

    subject.subscribe((data)=>{
      this.data.push({name:'Subscriber 1 ', value:data})
    })

    subject.subscribe((data)=>{
      this.data.push({name:'Subscriber 2', value:data})
    })

    subject.next(40)

    subject.subscribe((data)=>{
      this.data.push({name:'Subscriber 3', value:data})
      console.log(this.data)
    })

    subject.subscribe((data)=>{
      setTimeout(()=>{
        this.data.push({name:'Subscriber 4', value:data})
        subject.subscribe((data)=>{
          console.log(data)
        })
      console.log(this.data)

      }, 5000)
      
    })

    
  }

}
