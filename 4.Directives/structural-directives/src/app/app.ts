import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

type View = 'if' | 'for' | 'switch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  // --- "Tabs" / Views (ngSwitch demo) ---
  view: View = 'if';

  // --- ngIf demo state ---
  showImage = true;

  // --- ngFor demo state ---
  countries: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];

  // ✅ Added functionality
  clickCount = 0;

  ngOnInit(): void {
    // Restore state after refresh (extra functionality)
    const savedView = localStorage.getItem('view') as View | null;
    const savedClicks = localStorage.getItem('clickCount');

    if (savedView === 'if' || savedView === 'for' || savedView === 'switch') {
      this.view = savedView;
    }
    if (savedClicks && !Number.isNaN(Number(savedClicks))) {
      this.clickCount = Number(savedClicks);
    }
  }

  // ✅ Added functionality: one method used by all top buttons (counts clicks + persists)
  setView(v: View) {
    this.view = v;
    this.clickCount++;

    localStorage.setItem('view', this.view);
    localStorage.setItem('clickCount', String(this.clickCount));
  }

  // ngIf button
  toggleImage() {
    this.showImage = !this.showImage;
  }

  // ✅ Added functionality: reset button
  reset() {
    this.clickCount = 0;
    this.view = 'if';
    this.showImage = true;

    localStorage.setItem('view', this.view);
    localStorage.setItem('clickCount', String(this.clickCount));
  }
}
