import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {name:'John', job: 'Teacher', gender:'Male', country:'United States', age:35, avatar:'assets/test.jpg'},
    {name:'Mark', job: 'Designer', gender:'Male', country:'Germany', age:35, avatar:'assets/test2.jpg'},
    {name:'Merry', job: 'Lawyer', gender:'Female', country:'Ireland', age:35, avatar:'assets/test.jpg'},
    {name:'Steve', job: 'Doctor', gender:'Male', country:'India', age:35, avatar:'assets/test2.jpg'}
  ]

  onShowDetailsClicked = new EventEmitter<{name:string, job: string, gender:string, country:string, age: number, avatar:string}>;

  showUserDetails(user:{name:string, job: string, gender:string, country:string, age: number, avatar:string}){
    this.onShowDetailsClicked.emit(user);
  }
}
