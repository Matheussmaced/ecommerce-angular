import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/home/login/login.component';
import { InputLoginComponent } from '../../components/home/login/input-login/input-login.component';
import { ButtonSubmitComponent } from '../../components/home/login/button-submit/button-submit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../../components/register/register.component';
import { AppRoutingModule } from '../../app-routing.module';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  declarations: [
    LoginComponent,
    InputLoginComponent,
    ButtonSubmitComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
