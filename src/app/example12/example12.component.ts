import { Component, OnInit } from '@angular/core';
import { CourseType } from '../example9/course/course.type';
import { CoursesService } from '../example9/courses.service';

@Component({
  selector: 'app-example12',
  templateUrl: './example12.component.html',
  styleUrls: ['./example12.component.css']
})
export class Example12Component implements OnInit{
  classMark= 5;
  totalMarks = 10;
  _filteredText:string='';
  courses: CourseType[];
  filteredCourses: CourseType[];
  totalCourses = new Promise((resolve, rejcet)=>{
    setTimeout(()=>{
      resolve(this.filteredCourses.length);
    }, 2000);
  })

  constructor(private coursesService:CoursesService){}

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.filteredCourses = this.courses;
  }

  get filterText(){
    return this._filteredText;
  }

  set filterText(value){
    this._filteredText = value;
    this.filteredCourses = this.filteredStudentByAuthor(value);
  }

  onAddClick(){
    // let courseCopy = JSON.parse(JSON.stringify(this.courses));
    this.courses.push({id:106,name:'Test',author:'Test 1 Author',duration:100,type:'Free',image:'assets/test.jpg'});
    // this.courses = courseCopy;

  }
  onChangeClick(){
    // let courseCopy = JSON.parse(JSON.stringify(this.courses));
    this.courses[1].author = 'Test 1 Author 2';
    // this.courses = courseCopy;
  }

  filteredStudentByAuthor(value:string){
    if( this.courses.length == 0 || value == ''){
      return this.courses;
    }else{
      return this.courses.filter((course)=>{
        return course.author.includes(value);
      });
    }
  }
}
