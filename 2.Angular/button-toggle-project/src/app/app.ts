import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isOn = false;
  show = false;
  text = 'Hellooo';

  onClick() {
    this.isOn = !this.isOn;
    this.show = !this.show;
  }
}
