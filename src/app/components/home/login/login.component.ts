import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email:string = ""
  password:string = ""
  check:boolean = false

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.ClickTestForm();
  }

  ClickTestForm(){
    this.userService.loginUser(this.email, this.password).subscribe()
  }

  switchCheck(){
    this.check = !this.check
  }
}
