import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationslayoutComponent } from './locationslayout.component';

describe('LocationslayoutComponent', () => {
  let component: LocationslayoutComponent;
  let fixture: ComponentFixture<LocationslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationslayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
