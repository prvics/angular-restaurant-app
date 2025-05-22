import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FoodService } from '../../services/food.service';
import { Food } from '../../models/food';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  foods: Food[] = [];
  isAdmin = false;
  totalFoods = 0;
  averagePrice = 0;
  mostExpensiveFood: Food | null = null;

  constructor(
    private auth: AuthService,
    private foodService: FoodService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.auth.isAdmin()) {
      this.router.navigate(['/login']);
      return;
    }

    this.foods = this.foodService.getFoods();
    this.totalFoods = this.foods.length;
    this.averagePrice =
      this.foods.reduce((sum, f) => sum + f.price, 0) / this.totalFoods;
    this.mostExpensiveFood = this.foods.reduce((max, f) =>
      f.price > max.price ? f : max
    );
  }

  increment(food: Food) {
    this.foodService.incrementSoldCount(food.id);
    this.toastService.showToast(
      `${food.name} sold count increased.`,
      'success'
    );
  }
}
