import { Component,OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-example8',
  templateUrl: './example8.component.html',
  styleUrls: ['./example8.component.css']
})
export class Example8Component implements OnInit{

  array1 = [1,2,6,7,8];
  array2 = ['A', 'B', 'C'];
 
  counterObs = interval(1000);

  counterSub:Subscription;

  toggle: boolean = false;

  ngOnInit(): void {
  }

  toggleSubscribe(){
    if(this.toggle){
      this.unsubscribe();
    }else{
      this.subscribe();
    }
    this.toggle = !this.toggle;
  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }

  subscribe(){
    this.counterSub = this.counterObs.subscribe((val)=>{
      console.log(val);
    });
  }
}
