import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardslabexampleComponent } from './cardslabexample.component';

describe('CardslabexampleComponent', () => {
  let component: CardslabexampleComponent;
  let fixture: ComponentFixture<CardslabexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardslabexampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardslabexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
