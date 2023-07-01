import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { DiscountOffers } from '../../Shared_Classes_and_types/DiscountOffers';
import { IProduct } from "../../Shared_Classes_and_types/IProdects";
import { ICategory } from "../../Shared_Classes_and_types/ICategory";
import { ProductServiceService } from "../../services/product-service.service"
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IPosts } from 'src/Shared_Classes_and_types/IPosts';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  getPostDet( postid:any){
    console.log(postid);
    this.router.navigate(["Products",postid])
  }
  posts: any;
  errorMessage:any;
  constructor(private http: HttpClient ,private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.http.get<IPosts[]>('https://fakestoreapi.com/products').subscribe({
      next: data => this.posts = data,
      error: error => this.errorMessage = error
    });
   
  }
   
   
}
