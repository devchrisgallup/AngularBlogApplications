import { TestBed, inject } from '@angular/core/testing';

import { MlbService } from './mlb.service';

describe('MlbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlbService]
    });
  });

  it('should ...', inject([MlbService], (service: MlbService) => {
    expect(service).toBeTruthy();
  }));
});
