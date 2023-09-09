import { TestBed } from '@angular/core/testing';

import { EmitSearchService } from './emit-search.service';

describe('EmitSearchService', () => {
  let service: EmitSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
