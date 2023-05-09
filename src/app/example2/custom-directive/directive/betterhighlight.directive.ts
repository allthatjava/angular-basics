import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit, OnChanges{

  @Input() defaultColor: string ='yellow';
  @Input() highlightColor: string = 'pink';
  @Input() title:string = 'This is title';
  constructor(private element:ElementRef, private renderer:Renderer2) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.background = this.defaultColor;
    this.element.nativeElement.title = this.title;
  }
  
  @HostBinding('style.backgroundColor') 
  background: string = this.defaultColor;
  @HostBinding('style.border')
  border: string = 'none';

  @HostListener('mouseenter')
  mouseEnter(){
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave')
  moustOut(){
    this.background = this.defaultColor;
    this.border = 'none';
  }
}
