import { Pipe, PipeTransform } from '@angular/core';
import { CourseType } from 'src/app/example9/course/course.type';

@Pipe({
  name: 'filterAuthor'
})
export class FilterPipe implements PipeTransform {

  transform(courses: CourseType[], filterText: string): CourseType[] {
    console.log("FilterPipe has been called");
    if( courses.length == 0 || filterText == ''){
      return courses;
    }else{
      return courses.filter((course)=>{
        return course.author.includes(filterText);
      });
    }
  }

}
