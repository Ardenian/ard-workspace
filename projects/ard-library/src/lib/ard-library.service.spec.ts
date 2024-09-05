import { TestBed } from '@angular/core/testing';

import { ArdLibraryService } from './ard-library.service';

describe('ArdLibraryService', () => {
  let service: ArdLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArdLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
