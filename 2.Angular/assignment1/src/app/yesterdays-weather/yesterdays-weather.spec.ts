import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdaysWeather } from './yesterdays-weather';

describe('YesterdaysWeather', () => {
  let component: YesterdaysWeather;
  let fixture: ComponentFixture<YesterdaysWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesterdaysWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesterdaysWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
