import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverylayoutComponent } from './deliverylayout.component';

describe('DeliverylayoutComponent', () => {
  let component: DeliverylayoutComponent;
  let fixture: ComponentFixture<DeliverylayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverylayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverylayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
