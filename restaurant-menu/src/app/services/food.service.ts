import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods: Food[] = [
    { id: 1, name: 'Tomato Soup', category: 'Soup', price: 5 },
    { id: 2, name: 'Chicken Curry', category: 'Main', price: 12 },
    { id: 3, name: 'Chocolate Cake', category: 'Dessert', price: 7 },
    { id: 4, name: 'Caesar Salad', category: 'Main', price: 10 },
    { id: 5, name: 'Minestrone Soup', category: 'Soup', price: 6 },
    { id: 6, name: 'Tiramisu', category: 'Dessert', price: 8 },
    { id: 7, name: 'Grilled Salmon', category: 'Main', price: 15 },
    { id: 8, name: 'Garlic Bread', category: 'Appetizer', price: 4 },
    { id: 9, name: 'Pasta Primavera', category: 'Main', price: 11 },
    { id: 10, name: 'Cheesecake', category: 'Dessert', price: 9 },
    { id: 11, name: 'Bruschetta', category: 'Appetizer', price: 5 },
    { id: 12, name: 'Beef Stroganoff', category: 'Main', price: 14 },
    { id: 13, name: 'Caprese Salad', category: 'Appetizer', price: 7 },
    { id: 14, name: 'Lemon Tart', category: 'Dessert', price: 6 },
    { id: 15, name: 'Vegetable Stir Fry', category: 'Main', price: 10 },
    { id: 16, name: 'Spinach Dip', category: 'Appetizer', price: 5 },
    { id: 17, name: 'Panna Cotta', category: 'Dessert', price: 7 },
    { id: 18, name: 'Stuffed Mushrooms', category: 'Appetizer', price: 6 },
    { id: 19, name: 'Chicken Alfredo', category: 'Main', price: 13 },
    { id: 20, name: 'Fruit Salad', category: 'Dessert', price: 5 },
  ];

  getFoods(): Food[] {
    return this.foods;
  }
}
