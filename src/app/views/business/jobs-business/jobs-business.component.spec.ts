import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsBusinessComponent } from './jobs-business.component';

describe('JobsBusinessComponent', () => {
  let component: JobsBusinessComponent;
  let fixture: ComponentFixture<JobsBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
