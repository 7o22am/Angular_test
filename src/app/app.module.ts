import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
 import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithOutDiscountComponent } from './products-with-out-discount/products-with-out-discount.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotesComponent } from './notes/notes.component';
import { ProductsDetComponent } from './products-det/products-det.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    UsersComponent,
     PageNotFoundComponent,
    HomeComponent,
    ProductsWithDiscountComponent,
    ProductsWithOutDiscountComponent,
    LoginComponent,
    RegisterComponent,
    NotesComponent,
    ProductsDetComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
