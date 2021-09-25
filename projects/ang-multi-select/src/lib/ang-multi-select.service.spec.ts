import { TestBed } from '@angular/core/testing';

import { AngMultiSelectService } from './ang-multi-select.service';

describe('AngMultiSelectService', () => {
  let service: AngMultiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngMultiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
