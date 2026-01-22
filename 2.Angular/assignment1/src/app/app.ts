import { Component } from '@angular/core';
import { YesterdaysWeather } from './yesterdays-weather/yesterdays-weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [YesterdaysWeather],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Angular.js Course';
  name = 'My name is Prabesh. I am learning Angular.';

  yesterdayWeather = 'Yesterday it was 10°C and cloudy with light rain. ';
}
