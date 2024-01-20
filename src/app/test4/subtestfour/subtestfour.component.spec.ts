import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtestfourComponent } from './subtestfour.component';

describe('SubtestfourComponent', () => {
  let component: SubtestfourComponent;
  let fixture: ComponentFixture<SubtestfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtestfourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtestfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
