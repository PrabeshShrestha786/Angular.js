import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysWeather } from './todays-weather';

describe('TodaysWeather', () => {
  let component: TodaysWeather;
  let fixture: ComponentFixture<TodaysWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
