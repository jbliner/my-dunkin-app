import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupwindowComponent } from './signupwindow.component';

describe('SignupwindowComponent', () => {
  let component: SignupwindowComponent;
  let fixture: ComponentFixture<SignupwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupwindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
