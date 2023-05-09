import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]'
})
export class SetbackgroundDirective implements OnInit{
  private element: ElementRef;

  constructor(element: ElementRef) {
    // element.nativeElement.style.background = '#C8E6C9'
    this.element = element;
  }

   ngOnInit(){
    this.element.nativeElement.style.background = '#C8E6C9'
   }

}
