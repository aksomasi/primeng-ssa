import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuckDetailsComponent } from './puck-details.component';

describe('PuckDetailsComponent', () => {
  let component: PuckDetailsComponent;
  let fixture: ComponentFixture<PuckDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuckDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
