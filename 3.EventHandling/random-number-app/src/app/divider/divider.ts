import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './divider.html',
  styleUrls: ['./divider.css']
})
export class DividerComponent {
  @Input() valueToDivide: number | null = null;

  divisor: number = 2; // default selected value (2–10)
  dividedResult: number | null = null;

  divide(): void {
    if (this.valueToDivide === null) {
      this.dividedResult = null;
      return;
    }

    this.dividedResult = this.valueToDivide / this.divisor;
  }
}
