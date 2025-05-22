import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods: Food[] = [
    { id: 1, name: 'Tomato Soup', category: 'Soup', price: 5, soldCount: 14 },
    {
      id: 2,
      name: 'Chicken Curry',
      category: 'Main',
      price: 12,
      soldCount: 23,
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      category: 'Dessert',
      price: 7,
      soldCount: 17,
    },
    { id: 4, name: 'Caesar Salad', category: 'Main', price: 10, soldCount: 10 },
    {
      id: 5,
      name: 'Minestrone Soup',
      category: 'Soup',
      price: 6,
      soldCount: 11,
    },
    { id: 6, name: 'Tiramisu', category: 'Dessert', price: 8, soldCount: 20 },
    {
      id: 7,
      name: 'Grilled Salmon',
      category: 'Main',
      price: 15,
      soldCount: 8,
    },
    {
      id: 8,
      name: 'Garlic Bread',
      category: 'Appetizer',
      price: 4,
      soldCount: 19,
    },
    {
      id: 9,
      name: 'Pasta Primavera',
      category: 'Main',
      price: 11,
      soldCount: 15,
    },
    {
      id: 10,
      name: 'Cheesecake',
      category: 'Dessert',
      price: 9,
      soldCount: 12,
    },
    {
      id: 11,
      name: 'Bruschetta',
      category: 'Appetizer',
      price: 5,
      soldCount: 13,
    },
    {
      id: 12,
      name: 'Beef Stroganoff',
      category: 'Main',
      price: 14,
      soldCount: 9,
    },
    {
      id: 13,
      name: 'Caprese Salad',
      category: 'Appetizer',
      price: 7,
      soldCount: 16,
    },
    { id: 14, name: 'Lemon Tart', category: 'Dessert', price: 6, soldCount: 6 },
    {
      id: 15,
      name: 'Vegetable Stir Fry',
      category: 'Main',
      price: 10,
      soldCount: 7,
    },
    {
      id: 16,
      name: 'Spinach Dip',
      category: 'Appetizer',
      price: 5,
      soldCount: 5,
    },
    {
      id: 17,
      name: 'Panna Cotta',
      category: 'Dessert',
      price: 7,
      soldCount: 18,
    },
    {
      id: 18,
      name: 'Stuffed Mushrooms',
      category: 'Appetizer',
      price: 6,
      soldCount: 8,
    },
    {
      id: 19,
      name: 'Chicken Alfredo',
      category: 'Main',
      price: 13,
      soldCount: 21,
    },
    {
      id: 20,
      name: 'Fruit Salad',
      category: 'Dessert',
      price: 5,
      soldCount: 10,
    },
  ];

  getFoods(): Food[] {
    return this.foods;
  }

  incrementSoldCount(id: number): void {
    const food = this.foods.find((f) => f.id === id);
    if (food) {
      food.soldCount = (food.soldCount ?? 0) + 1;
    }
  }
}
