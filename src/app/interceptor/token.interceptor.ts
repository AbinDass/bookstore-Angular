import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token  = window.localStorage.getItem('token');
    console.log(token)
    if(request.url.includes('http://localhost')){
    request = request.clone({
      setHeaders:{
        Authorization:token || ''
      }
    })
  }
    return next.handle(request);
  }
}