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
    this.items.push(product);
    console.log(this.items);

  }
  emptyCart() {
    this.items = [];
  }
}
