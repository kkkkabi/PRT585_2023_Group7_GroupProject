import { TestBed } from '@angular/core/testing';

import { KabiTimesheetsService } from './kabi-timesheets.service';

describe('KabiTimesheetsService', () => {
  let service: KabiTimesheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KabiTimesheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
