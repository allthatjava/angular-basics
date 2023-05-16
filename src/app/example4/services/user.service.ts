import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {name:'John', status:'active'},
    {name:'Mark', status:'inactive'},
    {name:'Steve', status:'active'}
  ]

  addNewUser(nameValue: string, statusValue:string){
    this.users.push({name: nameValue, status: statusValue});
  }
}
