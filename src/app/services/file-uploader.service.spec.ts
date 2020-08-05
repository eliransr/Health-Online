import { TestBed } from '@angular/core/testing';

import { FileUploaderService } from './file-uploader.service';

describe('FileUploaderService', () => {
  let service: FileUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
