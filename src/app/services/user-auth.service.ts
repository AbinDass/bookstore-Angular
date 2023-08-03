import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserModel } from '../user/model/userState.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  userLogin(data: { email: string; password: string }): Observable<any> {
    return this.http.post(this.url+'/createlogin', data);
  }

  userSignup(data: UserModel): Observable<any> {
    console.log(data, data);
    return this.http.post(this.url+'/createsignup', data);
  }
}
