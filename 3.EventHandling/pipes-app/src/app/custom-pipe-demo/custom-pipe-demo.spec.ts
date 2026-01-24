import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeDemo } from './custom-pipe-demo';

describe('CustomPipeDemo', () => {
  let component: CustomPipeDemo;
  let fixture: ComponentFixture<CustomPipeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
