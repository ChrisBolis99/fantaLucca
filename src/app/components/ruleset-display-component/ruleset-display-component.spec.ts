import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesetDisplayComponent } from './ruleset-display-component';

describe('RulesetDisplayComponent', () => {
  let component: RulesetDisplayComponent;
  let fixture: ComponentFixture<RulesetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesetDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
