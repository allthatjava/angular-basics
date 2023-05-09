import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class HighlightDirective2 {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appHighlight2(condition: boolean) {
    if(condition){
      this.renderer.addClass(this.element.nativeElement, 'highlight');
    }
  }
}
