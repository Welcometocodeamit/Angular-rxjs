import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subjects',
  templateUrl: './async-subjects.component.html',
  styleUrls: ['./async-subjects.component.css']
})
export class AsyncSubjectsComponent {

  ngOnInit(){
    const sub = new AsyncSubject()
    sub.next(100)
    sub.next(200)
    sub.next(300)
    sub.complete()

    sub.subscribe(data=>{
      console.log(`Async subject called ${data}`)
    })
  }

}
