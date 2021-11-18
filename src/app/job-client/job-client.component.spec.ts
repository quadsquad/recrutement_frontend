import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobClientComponent } from './job-client.component';

describe('JobClientComponent', () => {
  let component: JobClientComponent;
  let fixture: ComponentFixture<JobClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
