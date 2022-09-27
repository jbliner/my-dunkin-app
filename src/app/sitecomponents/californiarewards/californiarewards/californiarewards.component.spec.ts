import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniarewardsComponent } from './californiarewards.component';

describe('CaliforniarewardsComponent', () => {
  let component: CaliforniarewardsComponent;
  let fixture: ComponentFixture<CaliforniarewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliforniarewardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaliforniarewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
