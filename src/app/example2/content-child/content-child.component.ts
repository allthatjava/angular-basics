import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit, AfterContentInit{
  ngAfterContentInit(): void {
    this.paragraph.nativeElement.textContent = 'This is new paragraph';
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngOnInit(): void {
    console.log(this.paragraph);
  }



  @ContentChild('paragraph') paragraph: ElementRef;
}
