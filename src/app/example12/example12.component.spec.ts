import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example12Component } from './example12.component';

describe('Example12Component', () => {
  let component: Example12Component;
  let fixture: ComponentFixture<Example12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
