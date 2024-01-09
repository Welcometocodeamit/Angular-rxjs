import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  data1:number[]=[]
  data2:number[]=[]
  data3:number[]=[]
  c=1
  counter = interval(1000)
  unsb1:any;
  unsb2:any;
  unsb3:any;

  onSubscribe1(){
    this.unsb1 =this.counter.subscribe((data)=>{
      this.data1.push(data)
    })
  }

  onUnsubscribe1(){
    this.unsb1.unsubscribe()

  }




  onSubscribe2(){
    this.unsb2 =this.counter.subscribe((data)=>{
      this.data2.push(data)
    })
  }

  onUnsubscribe2(){
    this.unsb2.unsubscribe()

  }





  onSubscribe3(){
    this.unsb3 =this.counter.subscribe((data)=>{
      this.data3.push(data)
    })
  }

  onUnsubscribe3(){
    this.unsb3.unsubscribe()

  }



}
