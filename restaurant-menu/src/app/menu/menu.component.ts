import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ToastService } from '../services/toast.service';
import { ConfirmToastComponent } from '../shared/confirm-toast/confirm-toast.component';
import { ConfirmToastService } from '../services/confirm-toast.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  foods: Food[] = [];
  categories: string[] = [];
  searchTerm: string = '';

  constructor(
    private foodService: FoodService,
    private cartService: CartService,
    private toastService: ToastService,
    private confirmToastService: ConfirmToastService
  ) {}

  categoryOrder = ['Appetizer', 'Soup', 'Main', 'Dessert'] as const;

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();

    const uniqueCategories = Array.from(
      new Set(this.foods.map((food) => food.category))
    ) as Food['category'][];
    this.categories = this.categoryOrder.filter((cat) =>
      uniqueCategories.includes(cat)
    );
  }

  getFoodsByCategory(category: string): Food[] {
    return this.foods
      .filter((food) => food.category === category)
      .filter((food) => {
        const term = this.searchTerm.toLowerCase();
        return (
          food.name.toLowerCase().includes(term) ||
          food.category.toLowerCase().includes(term) ||
          food.price.toString().includes(term)
        );
      });
  }

  addToCart(food: Food) {
    const alreadyInCart = this.cartService
      .getCartItems()
      .some((item) => item.id === food.id);

    if (alreadyInCart) {
      this.confirmToastService.showConfirm(
        `${food.name} is already in your cart. Add another one?`,
        () => {
          this.cartService.addToCart(food);
          this.toastService.showToast(
            `${food.name} has been added again.`,
            'success'
          );
        },
        () => {
          this.toastService.showToast(
            `${food.name} was not added again.`,
            'info'
          );
        }
      );
      return;
    }
    this.cartService.addToCart(food);
    this.toastService.showToast(
      `${food.name} has been added to the cart.`,
      'success'
    );
  }
}
