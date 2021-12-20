import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesBusinessComponent } from './messages-business.component';

describe('MessagesBusinessComponent', () => {
  let component: MessagesBusinessComponent;
  let fixture: ComponentFixture<MessagesBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
