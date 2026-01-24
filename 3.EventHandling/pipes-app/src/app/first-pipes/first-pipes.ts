import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-pipes.html',
  styleUrls: ['./first-pipes.css']
})
export class FirstPipesComponent {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;

  // extra examples (optional, but good to show variety)
  message: string = 'Hello Angular Pipes!';
  user = { name: 'Prabesh', age: 28, active: true };
}
