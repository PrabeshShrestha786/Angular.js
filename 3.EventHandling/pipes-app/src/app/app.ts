import { Component } from '@angular/core';
import { FirstPipesComponent } from './first-pipes/first-pipes';
import { JsonPipeComponent } from './json-pipe/json-pipe';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirstPipesComponent,
    JsonPipeComponent,
    CustomPipeDemoComponent
  ],
  templateUrl: './app.html',
})
export class AppComponent {}
