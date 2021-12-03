import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterJobsComponent } from './recruiter-jobs.component';

describe('RecruiterJobsComponent', () => {
  let component: RecruiterJobsComponent;
  let fixture: ComponentFixture<RecruiterJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
