import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPipe } from './json-pipe';

describe('JsonPipe', () => {
  let component: JsonPipe;
  let fixture: ComponentFixture<JsonPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
