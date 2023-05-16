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
export class CourseComponent implements OnInit, OnDestroy{
  course:CourseType;
  courseId:string;
  routeParamObs: Subscription;
  editMode: boolean= false;

  constructor(private activatedRoute:ActivatedRoute, private service: CoursesService,
    private router:Router){
  }

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id')!;
    // // this.courseId = this.activatedRoute.snapshot.params['id'];
    // this.course = this.service.courses.find(x=>x.id == parseInt(this.courseId))!;

    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id')!;
      this.course = this.service.courses.find(x=>x.id == parseInt(this.courseId))!;
    })

    //snapshot
    this.activatedRoute.queryParamMap.subscribe((query)=>{
      this.editMode = Boolean(query.get('edit'));
    });
  }

  ngOnDestroy(){
    this.routeParamObs.unsubscribe();
  }

  appendQueryParam(){
    this.router.navigate(['/example9/course/',this.course.id], {queryParams:{edit: true}});
  }
}
