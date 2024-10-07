import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name:string = ""
  email:string = ""
  password:string = ""
  cpf:string = ""
  cep:string = ""
  check:boolean = false

  constructor(private userService: UserService){}

  ClickTestForm(){
   this.userService.registerUser(this.name, this.email, this.password, this.cpf, this.cep);
  }

  switchCheck(){
    this.check = !this.check
  }
}
