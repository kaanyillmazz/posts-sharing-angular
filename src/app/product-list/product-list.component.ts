import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  this.getPosts();
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
