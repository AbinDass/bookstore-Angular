import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { appStateInterface } from 'src/app/appStore/appState';
import { loginRequested } from '../../userState/auth/auth.action';
import { tokenSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   isAuth!:string
  constructor(private store:Store<appStateInterface>){
    // store.select('userAuthentication').subscribe(data => {
    //   data.user
    // })
    store.select(tokenSelector).subscribe((token)=> this.isAuth = token);
  }
  
  loginForm = new FormGroup({
      emailid : new FormControl(null, [Validators.required , Validators.email]),
      password : new FormControl(null, [Validators.required , Validators.minLength(6)]),
  })

  emailError!:string
  passwordError!:string

  loginSubmit() { 
    let email = this.loginForm.value.emailid ?? ""
    let password = this.loginForm.value.password ?? ""
      this.store.dispatch(loginRequested({
        email,
        password
      }))
  
  }

 
  checkLoginErrors() {
    if(this.loginForm.controls.emailid.touched && this.loginForm.controls.emailid.invalid){
        if(this.loginForm.controls.emailid.getError('required')  ){
          this.emailError = " E mail is required"
        }else if(this.loginForm.controls.emailid.getError('email')  ){
          this.emailError = " please enter a valid email"
        }
    }else this.emailError = '' 

    if(this.loginForm.controls.password.touched && this.loginForm.controls.password.invalid){
      if(this.loginForm.controls.password.getError('required')){
        this.passwordError = "password required"
      }else if(this.loginForm.controls.password.getError('minlength')){
        this.passwordError = " password length should 6 "
      }
    }else this.passwordError = " "
  }
}
