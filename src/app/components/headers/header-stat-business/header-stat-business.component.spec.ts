import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStatBusinessComponent } from './header-stat-business.component';

describe('HeaderStatBusinessComponent', () => {
  let component: HeaderStatBusinessComponent;
  let fixture: ComponentFixture<HeaderStatBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderStatBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStatBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
