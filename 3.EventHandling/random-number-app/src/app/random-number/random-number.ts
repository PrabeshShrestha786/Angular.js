import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-random-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './random-number.html',
  styleUrls: ['./random-number.css']
})
export class RandomNumberComponent {
  randomNumber: number | null = null;
  inputNumber: number | null = null;
  result: number | null = null;

  @Output() resultChange = new EventEmitter<number>();

  generateRandomNumber(): void {
    const rand = Math.floor(Math.random() * 100) + 1;
    const add = this.inputNumber ?? 0;

    this.randomNumber = rand;
    this.result = rand + add;

    // send result to parent
    this.resultChange.emit(this.result);
  }
}
