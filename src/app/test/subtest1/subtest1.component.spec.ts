import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtest1Component } from './subtest1.component';

describe('Subtest1Component', () => {
  let component: Subtest1Component;
  let fixture: ComponentFixture<Subtest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subtest1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Subtest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
