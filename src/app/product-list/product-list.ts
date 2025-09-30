import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service} from '../services/service';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  searchProduct:string = "";
  products:any[] = [];

  constructor(private functions:Service){}

  ngOnInit(){
    this.products = this.functions.getProducts();
  }

  get filteredProduct(){
    return this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchProduct.toLowerCase())      
    );
  }

  addToCart(product: any){
    this.functions.addToCart(product);
    alert(product.name + " is added to your cart!")
  }
}