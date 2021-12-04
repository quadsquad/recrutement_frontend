import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularSkillsComponent } from './particular-skills.component';

describe('ParticularSkillsComponent', () => {
  let component: ParticularSkillsComponent;
  let fixture: ComponentFixture<ParticularSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
