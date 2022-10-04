import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunkincardlayoutComponent } from './dunkincardlayout.component';

describe('DunkincardlayoutComponent', () => {
  let component: DunkincardlayoutComponent;
  let fixture: ComponentFixture<DunkincardlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DunkincardlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DunkincardlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
