import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdperkslayoutComponent } from './ddperkslayout.component';

describe('DdperkslayoutComponent', () => {
  let component: DdperkslayoutComponent;
  let fixture: ComponentFixture<DdperkslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdperkslayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdperkslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
