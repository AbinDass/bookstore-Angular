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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './userState/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { authEffects } from './userState/auth/auth.effects';
import { ErrorComponent } from './components/error/error.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { CartComponent } from './components/cart/cart.component';
import { CurrencyConvertPipe } from '../pipes/currency-convert.pipe';
import { ToInrPipe } from '../pipes/to-inr.pipe';

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
    ErrorComponent,
    BookdetailComponent,
    CartComponent,
    CurrencyConvertPipe,
    ToInrPipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forFeature('userAuthentication', authReducer),
    EffectsModule.forFeature([authEffects])
  ]
})
export class UserModule { }
