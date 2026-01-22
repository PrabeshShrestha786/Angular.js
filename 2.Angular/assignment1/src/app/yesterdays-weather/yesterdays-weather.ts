import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yesterdays-weather',
  standalone: true,
  templateUrl: './yesterdays-weather.html',
  styleUrl: './yesterdays-weather.css',
})
export class YesterdaysWeather {
  @Input() data: string = '';
}
