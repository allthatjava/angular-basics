import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, map } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  error= new Subject();

  constructor(private http:HttpClient) { }

  createProduct(product:{pName:string, desc:string, price:string}){
    console.log(product);
    const headers = new HttpHeaders({'myheader':'myheadervalue'});
    return this.http.post<{name:string}>('https://angular-basics-97bf5-default-rtdb.firebaseio.com/product.json', product, {headers:headers});
  }

  fetchProduct(){
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin','*');
    const params = new HttpParams()
    .set('print','pretty');

    return this.http.get<{[key:string]: Product}>('https://angular-basics-97bf5-default-rtdb.firebaseio.com/product.json',
    {headers:headers, params:params})
    .pipe(map((res)=>{
      const products = [];
      for(const key in res){
        if( res.hasOwnProperty(key)){
          products.push({...res[key], id:key});
        }
      }
      return products;
    }), catchError((err)=>{
      console.log("Catched error...");
      return err;
    }));
  }

  deleteProduct(id:string){
    let headers = new HttpHeaders();
    headers = headers.append('myheader1','myheader1value');
    headers = headers.append('myheader2','myheader2value');
    this.http.delete('https://angular-basics-97bf5-default-rtdb.firebaseio.com/product/'+id+'.json', {'headers':headers})
    .subscribe();
  }

  deleteAll(){
    this.http.delete('https://angular-basics-97bf5-default-rtdb.firebaseio.com/product.json')
    .subscribe();
  }

  updateProduct(id:string, product:Product){
    this.http.put('https://angular-basics-97bf5-default-rtdb.firebaseio.com/product/'+id+'.json', product)
    .subscribe();
  }
}
