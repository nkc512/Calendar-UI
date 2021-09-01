import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlanComponent } from './all-plan.component';

describe('AllPlanComponent', () => {
  let component: AllPlanComponent;
  let fixture: ComponentFixture<AllPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
