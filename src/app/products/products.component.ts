import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { DiscountOffers } from '../../Shared_Classes_and_types/DiscountOffers';
import { IProduct } from "../../Shared_Classes_and_types/IProdects";
import { ICategory } from "../../Shared_Classes_and_types/ICategory";
import { ProductServiceService } from "../../services/product-service.service"
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products: any = [];
  ProductsByID: any;
  errorMessage: any;
  visability="hidden";
  @Output() childEvent = new EventEmitter();
  WhoAmI() {
    console.log("Im child");
  }

  renderValues() {
    this.childEvent.emit(this.ProductList);
  }
  NameClient: string = "";
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string = "assets/logo.png"
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
  Tenpercent: any;
  ProductID: any = 0;
  HiddTable() {
    this.IsPurchased ? this.IsPurchased = false : this.IsPurchased = true;
  }
  GetProdectById(id: any) {
    this.visability="visible";
    this.ProductID = id - 1;
    this.ngOnInit();
  }

  GoToProductsWithDiscount(){
    this.router.navigate(['Products/Discount']);
  }
  GoToProductsWithOutDiscount(){
    this.router.navigate(['Products/WithOutDiscount']);
  }
  constructor(private ProductServiceService: ProductServiceService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.Discount = DiscountOffers.NoDiscount;
    this.Tenpercent = DiscountOffers.TenPercent;
    this.StoreName = "Ahly SC";

    this.ProductList = [{
      ID: 1,
      Img: "image 1",
      Name: "prodect 1",
      Price: 100,
      Quantity: 10
    },
    {
      ID: 2,
      Img: "image 2",
      Name: "prodect 2",
      Price: 150,
      Quantity: 2
    }];
    this.CategoryList = [{
      ID: 1,
      Name: "Category1"
    }, {
      ID: 2,
      Name: "Category2"
    }];
    this.ClientName = "ahmed";
    this.IsPurchased = false;
  }
  ngOnInit(): void {
    this.ProductServiceService.GetAllProducts().subscribe({
      next: data => this.Products = data,
      error: error => this.errorMessage = error
    })


    this.ProductServiceService.GetProductById(this.ProductID).subscribe({
      next: data => this.ProductsByID = data[this.ProductID],
      error: error => this.errorMessage = error
    })
  }

}
