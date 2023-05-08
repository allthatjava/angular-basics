import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-template',
  templateUrl: './reference-template.component.html',
  styleUrls: ['./reference-template.component.css']
})
export class ReferenceTemplateComponent {

  sayHello(inputEl: HTMLInputElement){
    alert("Hello "+inputEl.value);
    console.log(inputEl);
  }
}
