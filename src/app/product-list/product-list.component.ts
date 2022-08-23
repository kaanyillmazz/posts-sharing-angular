import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Cart} from "../cart";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;
  items: Product[] = [];

  constructor(private productService: ProductService, private cart:Cart) { }

  ngOnInit(): void {
  this.getPosts();
  this.items = this.cart.getItems();
  }

  getPosts(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        console.log('response received');
        this.products = response;
      },
      (error) => {
        console.error('Request failed with error');
        this.loading = false;
      },
      () => {
        console.log('Request completed'); //This is actually not needed
        this.loading = false;
        console.log(this.products);
      })
  }

}
