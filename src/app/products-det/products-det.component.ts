import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-det',
  templateUrl: './products-det.component.html',
  styleUrls: ['./products-det.component.scss']
})
export class ProductsDetComponent implements OnInit {
  id: string | null="1";
  posts:any;
  errorMessage:any;
  constructor(private http: HttpClient ,private activatedRoute:ActivatedRoute,private router:Router ,private routey: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.routey.snapshot.paramMap.get('id');
    this.http.get<any>(`https://fakestoreapi.com/products/${this.id}`).subscribe({
      next: data => this.posts = data,
      error: error => this.errorMessage = error
    });
  }
}
