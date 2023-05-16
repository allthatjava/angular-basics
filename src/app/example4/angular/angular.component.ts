import { Component } from '@angular/core';
import { EnrollServiceService } from '../services/enroll-service.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title="Angular";

  constructor(private enrollService: EnrollServiceService){}

  OnEnroll(){
    this.enrollService.OnEnrollClick(this.title);
  }
}
