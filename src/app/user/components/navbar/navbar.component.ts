import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BookstoreService } from 'src/app/services/bookstore.service';
import { cart } from '../../model/cartState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private route:Router, private books:BookstoreService){ }

  isAuth!:boolean;
  cartCount!:number;
  count!:number
  
  logOut(){
    window.localStorage.removeItem('token') 
    this.route.navigate(['login'])
  }
  loginAlert(){
    alert ('please login first')
  }

  ngOnInit(): void {
    const token = window.localStorage.getItem('token')
    this.isAuth = !!token
    this.books.getcount().subscribe((count) => this.cartCount = count)
    this.getList()
  }

  getList() {
    this.books.listCart().subscribe((list: { data: cart[] }) => {
       
      // Assuming this.quantity is an array of numbers
      
      this.count = list.data.length;
    });
  }
}
