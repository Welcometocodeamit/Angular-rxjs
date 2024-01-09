import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {

  constructor(private service:TaskService){}

  tasks:string[]=['task1', 'task2', 'task3']

  ngOnInit(){
      this.service.sub.subscribe((value)=>{
          this.tasks.push(value)
      })

  }

  

}
