import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
})
export class App {
  view: 'name' | 'age' | 'job' | 'default' = 'default';

  setView(value: 'name' | 'age' | 'job') {
    this.view = value;
  }
}
