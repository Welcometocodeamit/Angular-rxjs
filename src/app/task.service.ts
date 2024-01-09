import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // eventEmit: EventEmitter<string> = new EventEmitter<string>()

  sub=new Subject<string>

  onCreateTask(value:string){
    this.sub.next(value)
    console.log(value)

  }
}
