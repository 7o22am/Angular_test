import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IComment } from 'src/Shared_Classes_and_types/IComments';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  PostId:any;
  comments:any
  errorMessage:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router ,private http: HttpClient) { }
 ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.PostId=params.get("id");
   });
   this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${this.PostId}/comments`).subscribe({
    next: data => this.comments = data,
    error: error => this.errorMessage = error
  })
  }
}
