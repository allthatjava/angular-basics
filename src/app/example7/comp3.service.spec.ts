import { TestBed } from '@angular/core/testing';

import { Comp3Service } from './comp3.service';

describe('Comp3Service', () => {
  let service: Comp3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comp3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
