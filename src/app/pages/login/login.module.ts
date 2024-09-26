import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/home/login/login.component';
import { InputLoginComponent } from '../../components/home/login/input-login/input-login.component';
import { ButtonSubmitComponent } from '../../components/home/login/button-submit/button-submit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    InputLoginComponent,
    ButtonSubmitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
