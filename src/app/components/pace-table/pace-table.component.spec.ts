import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceTableComponent } from './pace-table.component';

describe('PaceTableComponent', () => {
  let component: PaceTableComponent;
  let fixture: ComponentFixture<PaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
