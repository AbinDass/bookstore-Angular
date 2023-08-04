import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/services/bookstore.service';
import { cart } from '../../model/cartState';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  lists!: cart[];
  count!: number;
  constructor(private listcart: BookstoreService) {}
  quantity: number[] = [];

 
  
   
  

  incrementQuantity(i: number) {
    this.quantity[i] += 1;
  }
  decrementQuantity(i: number) {
    this.quantity[i] -= 1;
  }
  ngOnInit(): void {
    this.getList();
  }
  
  getList() {
    this.listcart.listCart().subscribe((list: { data: cart[] }) => {
      this.lists = list.data;
      // Assuming this.quantity is an array of numbers
      this.quantity = new Array<number>(this.lists.length).fill(1);
      this.count = this.lists.length;
      this.listcart.setcount(this.count)
    });
  }
  getTotal() {
    let total = 0;
    if (this.lists) {
      this.lists.forEach((data: any, i: number) => {
        total += parseInt((data.price as string).slice(1)) * this.quantity[i];
      });
    }
    return total.toString();
  }
  removeCart(id:string |null | undefined){
    this.listcart.removeFromCart(id).subscribe(() =>  {
      this.getList() 
    });
  }

}
