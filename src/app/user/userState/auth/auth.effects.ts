import { Actions, createEffect, ofType } from '@ngrx/effects';
import {UserAuthService} from '../../../services/user-auth.service';
import {loginRequested, loginSuccess, Failure, signupRequested, signupSuccess, signupFailure} from './auth.action'
import { map, switchMap } from 'rxjs';
import { User, UserModel } from '../../model/userState.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class authEffects {
    // constructor(){}
    loginRequest = createEffect(()=>{
        return this.action$.pipe(ofType(loginRequested) , 
        switchMap((logindata:{email:string, password:string}) => {
            return this.auth.userLogin(logindata).pipe(map(data=>{
                console.log(data,'datatatata');
                
              if(data.success) { 
                this.router.navigate([''])
                let res = {token: data.data.token, user: data.data.user}
                console.log(res,'redsult');
                window.localStorage.setItem('token',res.token)
                return loginSuccess(res)
            }
              else return Failure(data.message)
            }))
        })
        )
    })

    signUpRequest = createEffect(()=>{
        return this.action$.pipe(ofType(signupRequested),
        switchMap((signupData:UserModel)=>{
            return this.auth.userSignup(signupData).pipe(map(data => {
                console.log(data.response.success,'data')
                if(data.response.success) {
                    alert('hii')
                    this.router.navigate([''])
                    return signupSuccess({user:data.response.data, token:data.token})
                }
                else return signupFailure(data.response.message)
            }))
        })
        )
    })

    constructor(private auth:UserAuthService, private action$: Actions, private router:Router){}
    
}