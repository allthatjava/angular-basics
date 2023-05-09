import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() enteredText: string="initial string";

  constructor(){
    console.log("Constructor called")
    console.log("enteredText:"+this.enteredText);
  }
  ngOnDestroy(): void {
    console.log('OnDestory called');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit called.');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called');
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(){
    console.log("ngOnInit called")
    console.log("enteredText:"+this.enteredText);
  }
}
