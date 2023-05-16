import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-data-example',
  templateUrl: './data-example.component.html',
  styleUrls: ['./data-example.component.css']
})
export class DataExampleComponent implements OnInit{

  username:string='';
  status:string='active';

  constructor(private userService: UserService){}

  users: {name:string, status:string}[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  AddUser(){
    this.userService.addNewUser(this.username, this.status);
  }
}
