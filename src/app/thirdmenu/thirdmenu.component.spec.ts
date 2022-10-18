import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdmenuComponent } from './thirdmenu.component';

describe('ThirdmenuComponent', () => {
  let component: ThirdmenuComponent;
  let fixture: ComponentFixture<ThirdmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
