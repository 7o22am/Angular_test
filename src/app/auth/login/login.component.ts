import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from 'src/custom validations/userName.validator';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( private fb:FormBuilder , ) { }

  ngOnInit(): void {

  }
  LoginForm =this.fb.group({
        email:['',[Validators.required]],
       password:['',[Validators.required]],
    
  })
  uemail = localStorage.getItem("email");
  username = localStorage.getItem("username");
  password = localStorage.getItem("password");
  get email()
  {
    return this.LoginForm.get('email');
  }
  onSubmit(){
    if (this.LoginForm.value.email == this.uemail && this.LoginForm.value.password == this.password)
      console.log("welcome", this.username);
    else
      console.log('user not vailed')
  }
}

