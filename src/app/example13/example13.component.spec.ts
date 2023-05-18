import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example13Component } from './example13.component';

describe('Example13Component', () => {
  let component: Example13Component;
  let fixture: ComponentFixture<Example13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
