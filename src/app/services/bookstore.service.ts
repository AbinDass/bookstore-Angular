import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject} from 'rxjs'
import { cart } from '../user/model/cartState';
@Injectable({
  providedIn: 'root'
})

export class BookstoreService {
  baseurl = 'https://api.itbook.store/1.0'
  url = 'https://bookstore-97be.onrender.com/api';

  constructor(private http:HttpClient) { }
  private cartCount = new Subject <number>();

  setcount(count:number){
    this.cartCount.next(count);
  }
  getcount():Observable<number>{
    return this.cartCount
  }

  getnewBooks(): Observable<any> {
   return  this.http.get(this.baseurl+'/new')
  }

  bookDetails(bookId:string|null): Observable<any>{
    return this.http.get(this.baseurl+`/books/${bookId}`)
  }

  addCart(book:any) :Observable<any>{
    console.log(book,'from srvc')
    return this.http.post(this.url+'/addtocart', {book:book})
  }

  listCart(){
    return this.http.get<{data:cart[]}>(this.url+'/listcart')
  }

  removeFromCart(product:string |null | undefined){
    return this.http.post(this.url+'/removecart', {product:product})
  }
}


