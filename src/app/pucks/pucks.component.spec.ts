import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PucksComponent } from './pucks.component';

describe('PucksComponent', () => {
  let component: PucksComponent;
  let fixture: ComponentFixture<PucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PucksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
