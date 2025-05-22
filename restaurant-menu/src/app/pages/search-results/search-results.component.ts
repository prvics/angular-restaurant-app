import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';
import { Food } from '../../models/food';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  searchTerm: string = '';
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();
  }

  get filteredFoods(): Food[] {
    const term = this.searchTerm.toLowerCase();
    return this.foods.filter(
      (food) =>
        food.name.toLowerCase().includes(term) ||
        food.category.toLowerCase().includes(term) ||
        food.price.toString().includes(term)
    );
  }
}
