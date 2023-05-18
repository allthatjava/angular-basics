import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { CourseType } from './course.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  course:CourseType;
  courseId:string;
  routeParamObs: Subscription;
  editMode: boolean= false;

  constructor(private activatedRoute:ActivatedRoute, private service: CoursesService,
    private router:Router){
  }

  ngOnInit(): void {
    console.log("Course Component initialized");
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id')!;
    // // this.courseId = this.activatedRoute.snapshot.params['id'];
    this.course = this.service.courses.find(x=>x.id == parseInt(this.courseId))!;
  }

  appendQueryParam(){
    this.router.navigate(['/example9/course/',this.course.id], {queryParams:{edit: true}});
  }
}
