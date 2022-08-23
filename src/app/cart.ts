import {Product} from "./product";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class Cart {

  private static INSTANCE: Cart;
  items: Product[] = [];

  constructor() {
  }

  public static getInstance() {
    if (Cart.INSTANCE == null) {
      Cart.INSTANCE = new Cart();
    }
    return Cart.INSTANCE;
  }

  addToCart(product: Product) {
    if(this.findInCart(product) == -1) {
      this.items.push(product);
      let index = this.findInCart(product);
      this.items[index].count = this.items[index].count+1;
    } else {
      let index = this.findInCart(product);
      this.items[index].count = this.items[index].count+1;
    }
    console.log(this.items);
  }
  emptyCart() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }

  findInCart(product: Product) {
    for(let i = 0; i<this.items.length; i++) {
      if (product.id == this.items[i].id)
        return i;
    }
    return -1;
  }
}
