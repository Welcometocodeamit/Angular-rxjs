import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component {

  constructor(private service:TaskService){}

  myTask:string=''

  createTask(){
    this.service.onCreateTask(this.myTask)
  }

}
