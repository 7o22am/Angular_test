import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../app/products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'prj';
  messageFromChild:any;
  @ViewChild(ProductsComponent) Prodect? :ProductsComponent;

  
 ngOnInit(): void {
   
  }
}
