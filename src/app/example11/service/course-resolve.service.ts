import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from '../../example9/courses.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseResolveService implements Resolve<any>{

  constructor(private coursesService:CoursesService) { 
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   this.coursesService.getAllCoures().then((data:any)=>{
  //     return data;
  //   });
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        const resolvedData = 'Resolved data';
        observer.next(resolvedData);
        observer.complete();
      }, 5000); // Delay of 3 seconds (3000 milliseconds)
    });
  }

}
