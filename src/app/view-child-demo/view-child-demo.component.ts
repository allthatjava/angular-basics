import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent {

  sayHello(){
    console.log("Hello from viewChildDemo");
  }
}
