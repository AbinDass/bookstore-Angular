import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookstoreService } from 'src/app/services/bookstore.service';
import { idSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() newBooks!: any[]
  constructor(private bookService:BookstoreService, private store:Store){
    // store.select(idSelector).subscribe((id)=> console.log(id));

  }
  isAuth!: boolean;

  ngOnInit(): void {
    const token = window.localStorage.getItem('token')
    this.isAuth = !!token
  }
  addToCart(book: any){
    this.bookService.addCart(book).subscribe((data) => console.log(data))
    alert('Added to cart successfully')
  }
}

