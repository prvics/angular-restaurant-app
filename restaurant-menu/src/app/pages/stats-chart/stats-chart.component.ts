import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FoodService } from '../../services/food.service';
import { Food } from '../../models/food';

@Component({
  selector: 'app-stats-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.css'],
})
export class StatsChartComponent implements OnInit {
  data: { name: string; value: number }[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    const foods = this.foodService.getFoods();
    const grouped = new Map<string, number>();

    for (const food of foods) {
      const cat = food.category;
      const count = food.soldCount ?? 0;
      grouped.set(cat, (grouped.get(cat) ?? 0) + count);
    }

    this.data = Array.from(grouped, ([name, value]) => ({ name, value }));
  }

  view: [number, number] = [700, 400];
}
