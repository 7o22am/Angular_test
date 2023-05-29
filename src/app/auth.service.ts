import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;

  constructor() { }
  login() { 
      this.isLoggedIn =  this.isLoggedIn;
  }
}
