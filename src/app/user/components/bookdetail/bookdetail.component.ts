import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookstoreService } from 'src/app/services/bookstore.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  bookid!: string | null;
  bookData!:any;
  constructor(private route:ActivatedRoute, private book:BookstoreService){}
 isAuth!: boolean;
  ngOnInit(): void {
    this.route.paramMap.subscribe( params => this.bookid = params.get('id'))
    this.getBookDetails()

    const token = window.localStorage.getItem('token')
      this.isAuth = !!token
    
  }

  getBookDetails(){
    this.book.bookDetails(this.bookid).subscribe((bookData) => {
      this.bookData = bookData;
    } )
  }


}
