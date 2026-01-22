import { Component } from '@angular/core';

@Component({
  selector: 'app-todays-weather',
  imports: [],
  templateUrl: './todays-weather.html',
  styleUrl: './todays-weather.css',
})
export class TodaysWeather {
  heading = "Todays weather";
  temperature = 15;
  description = "Today is 15 degrees outside and the sun is shining";
}
