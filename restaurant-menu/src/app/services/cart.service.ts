import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Food[] = [];

  addToCart(food: Food) {
    this.cartItems.push(food);
  }

  getCartItems(): Food[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(food: Food) {
    const index = this.cartItems.indexOf(food);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
