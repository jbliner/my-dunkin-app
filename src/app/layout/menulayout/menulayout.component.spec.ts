import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulayoutComponent } from './menulayout.component';

describe('MenulayoutComponent', () => {
  let component: MenulayoutComponent;
  let fixture: ComponentFixture<MenulayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenulayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
