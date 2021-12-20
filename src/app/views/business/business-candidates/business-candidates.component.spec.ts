import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCandidatesComponent } from './business-candidates.component';

describe('BusinessCandidatesComponent', () => {
  let component: BusinessCandidatesComponent;
  let fixture: ComponentFixture<BusinessCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
