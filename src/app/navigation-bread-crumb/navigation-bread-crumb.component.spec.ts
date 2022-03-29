import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBreadCrumbComponent } from './navigation-bread-crumb.component';

describe('NavigationBreadCrumbComponent', () => {
  let component: NavigationBreadCrumbComponent;
  let fixture: ComponentFixture<NavigationBreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBreadCrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
