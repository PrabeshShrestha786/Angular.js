import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPipes } from './first-pipes';

describe('FirstPipes', () => {
  let component: FirstPipes;
  let fixture: ComponentFixture<FirstPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
