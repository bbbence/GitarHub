import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarEditComponent } from './guitar-edit.component';

describe('GuitarEditComponent', () => {
  let component: GuitarEditComponent;
  let fixture: ComponentFixture<GuitarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
