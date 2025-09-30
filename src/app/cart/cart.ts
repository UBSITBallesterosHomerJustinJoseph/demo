import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartItems:any[] = [];

  constructor(private functions: Service){}

  ngOnInit(){
    this.cartItems = this.functions.getCartItems();
  }

  get totalItems(){
    return this.functions.getCartTotalItems();
  }
  get totalPrice(){
    return this.functions.getCartTotalPrice();
  }
}