import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-pipe.html',
  styleUrls: ['./json-pipe.css']
})
export class JsonPipeComponent {
  testObject = { name: 'Prbesh', age: 28, job: 'Student' };
  testArray = [5, 15, 53, 1, 2];
}
