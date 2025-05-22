import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Food } from '../models/food';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: Food[] = [];

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    this.toastService.showToast('Your cart has been cleared.', 'info');
  }

  removeItem(item: Food) {
    this.items = this.items.filter((i) => i !== item);
    this.cartService.removeFromCart(item);
    this.toastService.showToast(
      `${item.name} has been removed from the cart.`,
      'info'
    );
  }

  clearCartWithCheckout() {
    this.cartService.clearCart();
    this.items = [];
    setTimeout(() => {
      this.toastService.showToast('Your cart has been cleared.', 'info');
    }, 3000);
  }

  checkout() {
    this.toastService.showToast('Thank you for your order!', 'success');

    this.clearCart();
  }
}
