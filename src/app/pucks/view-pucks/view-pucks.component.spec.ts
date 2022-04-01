import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPucksComponent } from './view-pucks.component';

describe('ViewPucksComponent', () => {
  let component: ViewPucksComponent;
  let fixture: ComponentFixture<ViewPucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPucksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
