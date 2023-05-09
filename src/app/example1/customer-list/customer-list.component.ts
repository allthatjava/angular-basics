import { Component } from '@angular/core';
import { Customer} from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  selectedCustomer:Customer;

  customers: Customer[] = [
    {customerNo:1, name:'mark', address:'', city:'London', country:'UK'},
    {customerNo:2, name:'bill', address:'', city:'New York', country:'US'},
    {customerNo:3, name:'phil', address:'', city:'Berlin', country:'Germany'},
    {customerNo:4, name:'john', address:'', city:'Mumbai', country:'India'},
    {customerNo:5, name:'brian', address:'', city:'Newmarket', country:'CA'}
  ];
}
