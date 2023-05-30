import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithOutDiscountComponent } from './products-with-out-discount/products-with-out-discount.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guardauth.service';
import { NotesComponent } from './notes/notes.component';
const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'Home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'Products',component:ProductsComponent, 
   children:[
    {path:'Discount',component:ProductsWithDiscountComponent},
    {path:'WithOutDiscount',component:ProductsWithOutDiscountComponent}
  ]},
  {path:'Users',component:UsersComponent},
  {path:'Posts',component:PostsComponent},
  {path:'Comments',component:CommentsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path:'Comments/:id', component:CommentsComponent},
  { path:'Notes', component:NotesComponent},
  {path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
