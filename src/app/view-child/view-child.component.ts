import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewChildDemoComponent } from '../view-child-demo/view-child-demo.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(ViewChildDemoComponent, {static: true}) viewChildDemo: ViewChildDemoComponent;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    console.log(this.dateOfBirth);
    console.log(this.age);
  }
}
