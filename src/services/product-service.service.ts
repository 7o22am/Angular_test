import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsComponent } from '../app/products/products.component';
import { IProduct } from 'src/Shared_Classes_and_types/IProdects';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnInit {
  _url='/assets/Data/Products.json';
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  GetAllProducts(){
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server error")
     }));
  }
  GetProductById(prdId:number){
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server error")
     }));
  }

  }

