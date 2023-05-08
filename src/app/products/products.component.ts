import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {id:1, name: "Minimallists", available:"Available", price:'109', image:"/assets/test.jpg", color:"red"},
    {id:2, name: "Hisense", available:"Not available", price:'3339', image:"/assets/test.jpg", color:"green"},
    {id:3, name:"Apple iPhone", available:"Available", price:'1855', image:"/assets/test.jpg", color:"black"}
  ];


}
