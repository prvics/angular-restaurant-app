import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

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

  constructor(
    private foodService: FoodService,
    private cartService: CartService
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
    return this.foods.filter((food) => food.category === category);
  }

  addToCart(food: Food) {
    this.cartService.addToCart(food);
    alert(`${food.name} has been added to the cart.`);
  }
}
