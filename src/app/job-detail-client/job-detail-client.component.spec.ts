import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailClientComponent } from './job-detail-client.component';

describe('JobDetailClientComponent', () => {
  let component: JobDetailClientComponent;
  let fixture: ComponentFixture<JobDetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
