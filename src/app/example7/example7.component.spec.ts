import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example7Component } from './example7.component';

describe('Example7Component', () => {
  let component: Example7Component;
  let fixture: ComponentFixture<Example7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
