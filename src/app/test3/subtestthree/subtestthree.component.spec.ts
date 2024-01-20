import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtestthreeComponent } from './subtestthree.component';

describe('SubtestthreeComponent', () => {
  let component: SubtestthreeComponent;
  let fixture: ComponentFixture<SubtestthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtestthreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtestthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
