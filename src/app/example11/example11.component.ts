import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from './service/can-deactivate-guard.service';
import { CourseType } from '../example9/course/course.type';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../example9/courses.service';

@Component({
  selector: 'app-example11',
  templateUrl: './example11.component.html',
  styleUrls: ['./example11.component.css']
})
export class Example11Component implements IDeactivateComponent, OnInit{

  courses:CourseType[]=[];

  name: string;
  age: number;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService){
  }

  canExit() {
    if(this.name || this.age){
      return confirm("You have unsaved changes. Do you relaly want to discard these change?");
    } else{
      return true;
    }
  }

  ngOnInit(){
    // this.courses = this.activatedRoute.snapshot.data['courses'];
    this.activatedRoute.data.subscribe((data)=>{
      this.courses = data['courses'];
    })
  }
}
