import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdperkscardComponent } from './ddperkscard.component';

describe('DdperkscardComponent', () => {
  let component: DdperkscardComponent;
  let fixture: ComponentFixture<DdperkscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdperkscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdperkscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
