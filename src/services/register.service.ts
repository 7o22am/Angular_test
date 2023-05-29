import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/auth/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit{
  _url="http://localhost:3000/register";
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
   
  }
  register(user:User)
  {
    return this.http.post<any>(this._url,user);
  }
}
