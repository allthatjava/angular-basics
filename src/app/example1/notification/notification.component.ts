import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeout:displayNotification}">
              This website uses cookies to provide better user experience.
              <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
             </div>`,
  styles: [".notification-div{margin:10px 0px; padding:10px 20px; background-color: #FAD7A0; text-align:center;}", 
          "p{font-size:14px}", ".close{float:right; margin-top: -15px;}",
          ".fadeout {vasibility: hidden; opacity:0; transition: vasibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {

  displayNotification:boolean = false;

  closeNotification(): void {
    this.displayNotification = true;
  }
}
