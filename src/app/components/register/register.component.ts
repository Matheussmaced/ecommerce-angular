import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:string = ""
  password:string = ""
  cpf:string = ""
  cep:string = ""
  check:boolean = false

  ClickTestForm(){
    console.log(this.email)
    console.log(this.password)
    console.log(this.cpf)
    console.log(this.cep)
  }

  switchCheck(){
    this.check = !this.check
  }
}
