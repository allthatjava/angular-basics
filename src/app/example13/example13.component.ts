import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example13',
  templateUrl: './example13.component.html',
  styleUrls: ['./example13.component.css']
})
export class Example13Component {

  fname: string='';
  femail: string='';
  gen: string='';

  defaultGender='Male';

  @ViewChild('myForm') form: NgForm;

  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'},
    {id:'3', value:'Other'}
  ];

  onSubmit(form: NgForm){
    if(form.dirty){
      console.log("Something changed. Are you suer to submit it?")
    }
    console.log(form);

    this.fname=this.form.value.name;
    this.femail=this.form.value.email;
    this.gen=this.form.value.gender;

    this.form.reset();
  }

  setDefaultValue(){
    // this.form.setValue({
    //   name: 'John Smith',
    //   email: 'abc@abc.com',
    //   gender: ''
    // });

    this.form.form.patchValue({
      name: 'John',
      email: 'abc@abc.com'
    })
  }
}
