import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    SearchbarComponent,
    SliderComponent,
    BookCardComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ]
})
export class UserModule { }
