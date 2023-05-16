import { Component,OnInit } from '@angular/core';
import { CourseType } from './course/course.type';
import { CoursesService } from './courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example9',
  templateUrl: './example9.component.html',
  styleUrls: ['./example9.component.css']
})
export class Example9Component implements OnInit{

  courses:CourseType[]=[];

  constructor(private coursesService: CoursesService, 
    private route:Router){}

  ngOnInit(){
    this.courses = this.coursesService.courses;
    // this.coursesService.getAllCoures().then((data:any)=>{
    //   this.courses = data;
    // })   
    // this.courses = this.activatedRoute.snapshot.data['courses'];
  }

  onCourseClick(id:number){
    this.route.navigateByUrl("/example9/course/"+id);
  }
}
