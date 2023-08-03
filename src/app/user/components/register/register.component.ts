import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { registerError } from '../../model/registerError';
import { Store } from '@ngrx/store';
import { appStateInterface } from 'src/app/appStore/appState';
import { signupRequested } from '../../userState/auth/auth.action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  error: registerError = {
    fullname: '',
    emailid: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  registerForm = new FormGroup({
    fullname: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    emailid: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private store: Store<appStateInterface>) {}

  submitRegisterForm() {
    let fullname = this.registerForm.value.fullname;
    let email = this.registerForm.value.emailid;
    let phone = this.registerForm.value.phone;
    let password = this.registerForm.value.password;
    let confirmPassword =  this.registerForm.value.confirmPassword
     if(password === confirmPassword) {
      this.store.dispatch(
        signupRequested({
          fullname,
          email,
          phone,
          password,
          // confirmPassword
        })
      );
     }else{
      alert('password doesnt match')
     }
    
  }

  registorErrors() {
    //fullname error
    if (
      this.registerForm.controls.fullname.touched &&
      this.registerForm.controls.fullname.invalid
    ) {
      if (this.registerForm.controls.fullname.getError('required'))
        this.error.fullname = ' password required';
      else if (this.registerForm.controls.fullname.getError('maxlength'))
        this.error.fullname = 'maximum length is 20 characters';
      else if (this.registerForm.controls.fullname.getError('minlength'))
        this.error.fullname = 'min 3 letter required';
    } else this.error.fullname = '';

    // email error
    if (
      this.registerForm.controls.emailid.touched &&
      this.registerForm.controls.emailid.invalid
    ) {
      if (this.registerForm.controls.emailid.getError('required'))
        this.error.emailid = ' E mail is required';
      else if (this.registerForm.controls.emailid.getError('email'))
        this.error.emailid = ' please enter a valid email';
    } else this.error.emailid = '';

    // phone error
    if (
      this.registerForm.controls.phone.touched &&
      this.registerForm.controls.phone.invalid
    ) {
      if (this.registerForm.controls.phone.getError('required'))
        this.error.phone = 'phone number is required';
      else if (this.registerForm.controls.phone.getError('maxlength'))
        this.error.phone = 'maximum 10 numbers required';
      else if (this.registerForm.controls.phone.getError('minlength'))
        this.error.phone = 'minimum 10 mumbers required';
      else if (this.registerForm.controls.phone.getError('pattern'))
        this.error.phone = 'phone should be  mumbers';
    } else this.error.phone = ' ';

    //password error
    if (
      this.registerForm.controls.password.touched &&
      this.registerForm.controls.password.invalid
    ) {
      if (this.registerForm.controls.password.getError('required'))
        this.error.password = 'password required';
      else if (this.registerForm.controls.password.getError('minlength'))
        this.error.password = ' password length should 6 ';
    } else this.error.password = ' ';

    //confirm password error
    if (
      this.registerForm.controls.confirmPassword.touched &&
      this.registerForm.controls.confirmPassword.invalid
    ) {
      if (this.registerForm.controls.confirmPassword.getError('required'))
        this.error.confirmPassword = 'Confirm Password required';
      else if (this.registerForm.controls.confirmPassword.getError('minlength'))
        this.error.confirmPassword = 'Confirm password length should 6 ';
    } else this.error.confirmPassword = ' ';
  }
}
