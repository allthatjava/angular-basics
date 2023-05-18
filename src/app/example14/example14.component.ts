import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from './model/product';
import { ProductsService } from './service/products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example14',
  templateUrl: './example14.component.html',
  styleUrls: ['./example14.component.css']
})
export class Example14Component implements OnInit, OnDestroy{

  allProducts: Product[] = [];
  isFetching:boolean= false;
  isEditMode:boolean= false;
  currProdId:string;
  errorMessage: string;
  errorSub: Subscription;
  @ViewChild('productsForm') form:NgForm;

  constructor(private productService: ProductsService){
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchProducts();
    this.errorSub = this.productService.error.subscribe((message:string)=>{
      this.errorMessage = message;
    })
  }

  onProductFetch(){
    this.fetchProducts();
  }

  onProductClear(){
    this.productService.deleteAll();
  }

  onProductDelete(id:string){
    this.productService.deleteProduct(id);
  }

  onProductsCreate(product:{pName:string, desc:string, price:string}){
    this.errorMessage = '';
    if( !this.isEditMode )
      this.productService.createProduct(product).subscribe((res)=>{
        console.log(res);
        this.fetchProducts();
      }, (err)=>{
        this.errorMessage = err.message;
      });
    else
      this.productService.updateProduct(this.currProdId, product);
  }

  private fetchProducts(){
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((res:Product[])=>{
      this.allProducts = res;
      this.isFetching=false;
    },(err)=>{
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  onEditClick(id:string){
    this.currProdId = id;
    // Get the product by id
    let prod = this.allProducts.find((prod)=>{ return prod.id==id });
    console.log(this.form);

    // Populate the from with the product details
    this.form.setValue({
      pName: prod.pName,
      desc: prod.desc,
      price: prod.price
    })
    // Change the button to Edit
    this.isEditMode=true;
  }

  cancelUpdate(){
    this.currProdId='';
    this.isEditMode=false;
    this.form.reset();
  }
}
