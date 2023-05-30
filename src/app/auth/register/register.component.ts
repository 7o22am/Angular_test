import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/custom validations/confirmPassword.validator';
import { ForbiddenNameValidator } from 'src/custom validations/userName.validator';

import { RegisterService } from 'src/services/register.service';
import { User } from '../User';
 
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm =this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$') ]],
  },{validator:[ConfirmPasswordValidator]})
 
  constructor( private fb:FormBuilder , private RegisterService:RegisterService) { }
  ngOnInit(): void {
 
  }
  get userName()
  {
    return this.registerationForm.get('userName');
  }
  
  get email()
  {
    return this.registerationForm.get('email');
  }
  onSubmit(){
 
    this.RegisterService.register(this.registerationForm.value).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    })
    localStorage.setItem('username',this.registerationForm.value.userName);
    localStorage.setItem('email',this.registerationForm.value.email);
    localStorage.setItem('password',this.registerationForm.value.password);
 
  }
 
}
