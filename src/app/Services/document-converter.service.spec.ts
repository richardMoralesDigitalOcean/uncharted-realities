import { TestBed, inject } from '@angular/core/testing';

import { DocumentConverterService } from './document-converter.service';

describe('DocumentConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentConverterService]
    });
  });

  it('should be created', inject([DocumentConverterService], (service: DocumentConverterService) => {
    expect(service).toBeTruthy();
  }));
});
