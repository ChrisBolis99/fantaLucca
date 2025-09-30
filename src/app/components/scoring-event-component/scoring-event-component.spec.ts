import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringEventComponent } from './scoring-event-component';

describe('RuleComponent', () => {
  let component: ScoringEventComponent;
  let fixture: ComponentFixture<ScoringEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoringEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoringEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
