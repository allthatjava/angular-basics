import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit{

constructor(private userService: UserService){}

  users:{name:string, job: string, gender:string, country:string, age: number, avatar:string}[]
  = [];

  ngOnInit(): void {
   this.users = this.userService.users
  }

  showDetails(user: {name:string, job: string, gender:string, country:string, age: number, avatar:string}){
    this.userService.showUserDetails(user);
  }
}
