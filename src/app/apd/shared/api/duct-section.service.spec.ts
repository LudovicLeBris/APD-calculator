import { TestBed } from '@angular/core/testing';

import { DuctSectionService } from './duct-section.service';

describe('DuctSectionService', () => {
  let service: DuctSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuctSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
