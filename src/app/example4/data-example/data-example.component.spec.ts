import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExampleComponent } from './data-example.component';

describe('DataExampleComponent', () => {
  let component: DataExampleComponent;
  let fixture: ComponentFixture<DataExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
