import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class BookstoreService {
  baseurl = 'https://api.itbook.store/1.0'

  constructor(private http:HttpClient) { }

  getnewBooks(): Observable<any> {
   return  this.http.get(this.baseurl+'/new')
  }

  bookDetails(bookId:string|null): Observable<any>{
    return this.http.get(this.baseurl+`/books/${bookId}`)
  }
}


