import { TestBed } from '@angular/core/testing';

import { DuctNetworkService } from './duct-network.service';

describe('DuctNetworkService', () => {
  let service: DuctNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuctNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
