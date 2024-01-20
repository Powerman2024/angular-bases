import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtest2Component } from './subtest2.component';

describe('Subtest2Component', () => {
  let component: Subtest2Component;
  let fixture: ComponentFixture<Subtest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subtest2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Subtest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
