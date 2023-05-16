import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  inputText: string;

  constructor(private dataService: DataService){    
  }

  ngOnInit(): void {
      this.dataService.dataEmitter.subscribe((value)=>
        this.inputText = value);
  }

}
