import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StringTransformPipe } from '../string-transform-pipe';

@Component({
  selector: 'app-custom-pipe-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, StringTransformPipe],
  templateUrl: './custom-pipe-demo.html',
})
export class CustomPipeDemoComponent {

  inputText: string = '';
  submittedText: string = '';

  transformText(): void {
    this.submittedText = this.inputText;
  }
}
