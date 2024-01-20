import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtestfiveComponent } from './subtestfive.component';

describe('SubtestfiveComponent', () => {
  let component: SubtestfiveComponent;
  let fixture: ComponentFixture<SubtestfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtestfiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtestfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
