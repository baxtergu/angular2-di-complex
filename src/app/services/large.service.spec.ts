import { TestBed, inject } from '@angular/core/testing';

import { LargeService } from './large.service';

describe('LargeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LargeService]
    });
  });

  it('should ...', inject([LargeService], (service: LargeService) => {
    expect(service).toBeTruthy();
  }));
});
