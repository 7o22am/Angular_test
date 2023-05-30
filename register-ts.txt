import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegisterService } from 'src/services/register.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  contains=["facebook","twitter " ,"google"];
  userModel= new User("","","","","");
  constructor(private RegisterService:RegisterService) { }
  ngOnInit(): void {
 
  }
  onSubmit(){
    this.RegisterService.register(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    })
    localStorage.setItem('username',this.userModel.username);
    localStorage.setItem('email',this.userModel.email);
    localStorage.setItem('password',this.userModel.password);
 
  }
}
