import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-example7',
  templateUrl: './example7.component.html',
  styleUrls: ['./example7.component.css']
})
export class Example7Component {

  constructor(private dataService: DataService, private route:Router, private activatedRoute:ActivatedRoute){
    
  }

  navigateToExample1(){
    this.route.navigate(['example1']);
    // this.route.navigateByUrl('example1');
  }
}
