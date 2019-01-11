import { TestBed, inject } from '@angular/core/testing';

import { FlatironServiceService } from './flatiron-service.service';

describe('FlatironServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatironServiceService]
    });
  });

  it('should be created', inject([FlatironServiceService], (service: FlatironServiceService) => {
    expect(service).toBeTruthy();
  }));
});
