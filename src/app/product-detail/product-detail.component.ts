import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Cart} from "../cart";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;


  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location, private cart:Cart) {
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }

  ngOnInit(): void {
    this.getPost();
  }


  goBack(): void {
    this.location.back();
  }

}
