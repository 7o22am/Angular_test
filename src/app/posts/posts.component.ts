import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from 'src/Shared_Classes_and_types/IPosts';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  getPostComments( Postid:any){
    console.log(Postid);
    this.router.navigate(["Comments",Postid])
  }
  posts: any;
  errorMessage:any;
  constructor(private http: HttpClient ,private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.http.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: data => this.posts = data,
      error: error => this.errorMessage = error
    });
   
  }

}
