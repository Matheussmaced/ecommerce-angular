import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {  CircleDollarSign, CircleUserRound, CreditCard, LucideAngularModule, Phone, RotateCcw, Shirt, ShoppingCart, Store } from 'lucide-angular';
import { ButtonNavBarComponent } from './components/navbar/button-nav-bar/button-nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/home/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { MaleComponent } from './components/male/male.component';
import { FeminineComponent } from './components/feminine/feminine.component';
import { KidsComponent } from './components/kids/kids.component';
import { RegisterComponent } from './components/register/register.component';
import { ButtonsSizesComponent } from './components/buttons-sizes/buttons-sizes.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonRegisterComponent } from './components/register/button-register/button-register.component';
import { InputRegisterComponent } from './components/register/input-register/input-register.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/footer/cards/cards.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'novidades', component: NewsComponent },
  { path: 'masculino', component: MaleComponent },
  { path: 'feminino', component: FeminineComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ButtonNavBarComponent,
    RegisterComponent,
    ButtonsSizesComponent,
    MaleComponent,
    ProductComponent,
    RegisterComponent,
    ButtonRegisterComponent,
    InputRegisterComponent,
    FooterComponent,
    CardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    LoginModule,
    LucideAngularModule.pick({ Shirt, ShoppingCart, CreditCard, CircleDollarSign, Store, RotateCcw, Phone, CircleUserRound}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
