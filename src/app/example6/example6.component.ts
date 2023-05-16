import { Component,OnInit } from '@angular/core';
import { Observable, of, from, map, filter } from 'rxjs';

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.css']
})
export class Example6Component implements OnInit{

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(()=>{observer.next("1");}, 1000);
  //   setTimeout(()=>{observer.next("2");}, 2000);
  //   setTimeout(()=>{observer.next("3");}, 3000);
  //   // setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))}, 3000);
  //   setTimeout(()=>{observer.next("4");}, 4000);
  //   setTimeout(()=>{observer.next("5");}, 5000);
  //   setTimeout(()=>{observer.complete();}, 3000);
  // });

  // Using Create Method
  // myObservable = Observable.create((observer:any) => {
  //   setTimeout(()=>{observer.next("A");}, 1000);
  //   setTimeout(()=>{observer.next("B");}, 2000);
  //   setTimeout(()=>{observer.next("C");}, 3000);
  //   setTimeout(()=>{observer.next("D");}, 4000);
  //   // setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))}, 4000);
  //   setTimeout(()=>{observer.next("E");}, 5000);
  //   setTimeout(()=>{observer.complete();}, 6000);
  // });

  array1 = [1,2,6,7,8];
  array2 = ['A', 'B', 'C'];

  // myObservable = of(this.array1, this.array2, 20, 79, 'Hello');

  myObservable = from(this.array1);

  // Second operator ( in this case filter) is optional
  transformedData = this.myObservable.pipe(map((val)=>{
    return val *5;
  }),
  filter((val)=>{
    return val >= 10;
  }));

  filteredObs = this.transformedData.pipe(filter((val)=>{
    return val >= 30;
  }));

  ngOnInit(): void {
      this.transformedData.subscribe((val:any)=>{
        console.log(val);
      }, 
      (error:any) => {
        alert(error.message);
      },
      () => {
        alert("Observable has completed emitting all values");
      }
      );

      // Filtered Observable.
      console.log('Filtered Observable---');
      this.filteredObs.subscribe((val:any)=>{
        console.log(val);
      } );
  }
}
