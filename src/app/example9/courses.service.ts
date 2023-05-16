import { Injectable } from '@angular/core';
import { CourseType } from './course/course.type';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  courses: CourseType[] = [
    {id:101, name:'Javascript1', author:'John 1 Doe', duration: 18, type:'Free', image:'assets/test.jpg'},
    {id:102, name:'Javascript2', author:'John 2 Doe', duration: 28, type:'Premium', image:'assets/test2.jpg'},
    {id:103, name:'Javascript3', author:'John 3 Doe', duration: 38, type:'Free', image:'assets/test.jpg'},
    {id:104, name:'Javascript4', author:'John 4 Doe', duration: 48, type:'Premium', image:'assets/test2.jpg'},
    {id:105, name:'Javascript5', author:'John 5 Doe', duration: 58, type:'Free', image:'assets/test.jpg'},
  ];

  getAllCoures():any{
    const courseList = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.courses)
      }, 5000)
    });

    return courseList;
  }


}
