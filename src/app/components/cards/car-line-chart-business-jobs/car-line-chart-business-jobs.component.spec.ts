import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLineChartBusinessJobsComponent } from './car-line-chart-business-jobs.component';

describe('CarLineChartBusinessJobsComponent', () => {
  let component: CarLineChartBusinessJobsComponent;
  let fixture: ComponentFixture<CarLineChartBusinessJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarLineChartBusinessJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLineChartBusinessJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
