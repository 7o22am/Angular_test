import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new User("", "", "", "", "");
  email = localStorage.getItem("email");
  username = localStorage.getItem("username");
  password = localStorage.getItem("password");

  ngOnInit(): void {


  }
  onSubmit() {
    if (this.userModel.email == this.email && this.userModel.password == this.password)
      console.log("welcome", this.username);
    else
      console.log('user not vailed')

  }

}

