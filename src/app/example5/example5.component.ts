import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component {

  constructor(private userService: UserService){}
}
