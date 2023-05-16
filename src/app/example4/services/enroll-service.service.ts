import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollServiceService {

  constructor() { }
  OnEnrollClick(title: string){
    alert("Thanks you for enrolling "+title+" course");
  }
}
