import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string = ""
  password:string = ""
  check:boolean = false

  ClickTestForm(){
    console.log(this.email)
    console.log(this.password)
  }

  switchCheck(){
    this.check = !this.check
  }
}
