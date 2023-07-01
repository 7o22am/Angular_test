import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithOutDiscountComponent } from './products-with-out-discount/products-with-out-discount.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guardauth.service';
import { NotesComponent } from './notes/notes.component';
import { ProductsDetComponent } from './products-det/products-det.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'Products',component:ProductsComponent, 
   children:[
    {path:'Discount',component:ProductsWithDiscountComponent},
    {path:'WithOutDiscount',component:ProductsWithOutDiscountComponent}
  ]},
  {path:'Users',component:UsersComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'Products/:id', component: ProductsDetComponent },
  { path:'Notes', component:NotesComponent},
  {path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
