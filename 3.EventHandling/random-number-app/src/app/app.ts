import { Component } from '@angular/core';
import { RandomNumberComponent } from './random-number/random-number';
import { DividerComponent } from './divider/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomNumberComponent, DividerComponent],
  templateUrl: './app.html',
})
export class AppComponent {
  latestResult: number | null = null;

  onResultChange(newResult: number): void {
    this.latestResult = newResult;
  }
}
