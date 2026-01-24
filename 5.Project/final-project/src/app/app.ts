import { Component } from '@angular/core';
import {
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

type View = 'home' | 'calc' | 'editor' | 'quiz';

type Op = '+' | '-' | '*' | '/';

type QuizQuestion = {
  text: string;
  options: string[];
  correctIndex: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // ----------------- VIEW NAVIGATION -----------------
  view: View = 'home';

  setView(v: View) {
    this.view = v;
    // reset small per-view messages if you want (optional)
    this.calcError = '';
  }

  // ----------------- VIEW 2: CALCULATOR -----------------
  numA: number | null = null;
  numB: number | null = null;
  op: Op = '+';
  calcResult: number | null = null;
  calcError = '';

  calculate() {
    this.calcError = '';
    this.calcResult = null;

    if (this.numA === null || this.numB === null) {
      this.calcError = 'Please enter both numbers.';
      return;
    }

    const a = this.numA;
    const b = this.numB;

    if (this.op === '+') this.calcResult = a + b;
    if (this.op === '-') this.calcResult = a - b;
    if (this.op === '*') this.calcResult = a * b;

    if (this.op === '/') {
      if (b === 0) {
        this.calcError = "You can't divide by 0.";
        return;
      }
      this.calcResult = a / b;
    }
  }

  clearCalc() {
    this.numA = null;
    this.numB = null;
    this.op = '+';
    this.calcResult = null;
    this.calcError = '';
  }

  // ----------------- VIEW 3: TEXT EDITOR -----------------
  textValue = '';
  editorMessage = '';

  toUpper() {
    this.textValue = this.textValue.toUpperCase();
    this.editorMessage = 'Converted to UPPERCASE.';
  }

  toLower() {
    this.textValue = this.textValue.toLowerCase();
    this.editorMessage = 'Converted to lowercase.';
  }

  clearText() {
    this.textValue = '';
    this.editorMessage = 'Text cleared.';
  }

  wordCount(): number {
    const t = this.textValue.trim();
    if (!t) return 0;
    return t.split(/\s+/).length;
  }

  // ----------------- VIEW 4: QUIZ (Option 1) -----------------
  questions: QuizQuestion[] = [
    {
      text: 'Which structural directive is used to show/hide content?',
      options: ['ngFor', 'ngIf', 'ngStyle', 'ngModel'],
      correctIndex: 1,
    },
    {
      text: 'Which directive is used to repeat elements for a list?',
      options: ['ngSwitch', 'ngFor', 'ngClass', 'ngTemplate'],
      correctIndex: 1,
    },
    {
      text: 'In standalone components, where do you enable ngIf/ngFor?',
      options: [
        'In styles.css',
        'In angular.json',
        'In @Component({ imports: [...] })',
        'In index.html',
      ],
      correctIndex: 2,
    },
  ];

  // store selected option index for each question (null if unanswered)
  answers: (number | null)[] = [null, null, null];

  quizSubmitted = false;
  quizScore = 0;

  selectAnswer(qIndex: number, optionIndex: number) {
    this.answers[qIndex] = optionIndex;
  }

  submitQuiz() {
    this.quizSubmitted = true;
    let score = 0;

    for (let i = 0; i < this.questions.length; i++) {
      if (this.answers[i] === this.questions[i].correctIndex) score++;
    }
    this.quizScore = score;
  }

  resetQuiz() {
    this.answers = [null, null, null];
    this.quizSubmitted = false;
    this.quizScore = 0;
  }

  isCorrect(qIndex: number): boolean {
    return this.answers[qIndex] === this.questions[qIndex].correctIndex;
  }

  correctAnswerText(qIndex: number): string {
    const q = this.questions[qIndex];
    return q.options[q.correctIndex];
  }
}
