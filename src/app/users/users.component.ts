import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import{Iuser} from '../../Shared_Classes_and_types/Iuser'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: any;
  errorMessage:any;
  image:string="assets/ahly1.png"
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<Iuser[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: data => this.users = data,
      error: error => this.errorMessage = error
    })
     
  }
}
