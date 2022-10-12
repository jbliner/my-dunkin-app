import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulayoutaddonsComponent } from './menulayoutaddons.component';

describe('MenulayoutaddonsComponent', () => {
  let component: MenulayoutaddonsComponent;
  let fixture: ComponentFixture<MenulayoutaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulayoutaddonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenulayoutaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
