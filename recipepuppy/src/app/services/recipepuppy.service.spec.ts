import { TestBed, inject } from '@angular/core/testing';

import { RecipepuppyService } from './recipepuppy.service';

describe('RecipepuppyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipepuppyService]
    });
  });

  it('should ...', inject([RecipepuppyService], (service: RecipepuppyService) => {
    expect(service).toBeTruthy();
  }));
});
