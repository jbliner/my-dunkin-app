import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdnavbarComponent } from './thirdnavbar.component';

describe('ThirdnavbarComponent', () => {
  let component: ThirdnavbarComponent;
  let fixture: ComponentFixture<ThirdnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
