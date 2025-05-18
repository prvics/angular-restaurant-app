import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: Food[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    alert('Your cart has been cleared.');
  }

  removeItem(item: Food) {
    this.items = this.items.filter((i) => i !== item);
    this.cartService.removeFromCart(item);
    alert(`${item.name} has been removed from the cart.`);
  }

  checkout() {
    alert('Thank you for your order!');
    this.clearCart();
  }
}
