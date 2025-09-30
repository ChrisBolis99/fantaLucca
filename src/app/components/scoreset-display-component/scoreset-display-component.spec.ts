import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSetDisplayComponent } from './scoreset-display-component';

describe('RulesetDisplayComponent', () => {
  let component: ScoreSetDisplayComponent;
  let fixture: ComponentFixture<ScoreSetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreSetDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreSetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
