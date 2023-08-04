import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/services/bookstore.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private books: BookstoreService) {}
  latestBooks!: any[];
  ngOnInit() {
    
    this.getNewBoooks();
  }
  //get new boooks
  getNewBoooks() {
    this.books.getnewBooks().subscribe((newBooks) => {
      this.latestBooks = newBooks.books;
      console.log(this.latestBooks);
    });
  }
}
