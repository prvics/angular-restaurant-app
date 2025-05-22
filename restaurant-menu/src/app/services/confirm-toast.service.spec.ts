import { TestBed } from '@angular/core/testing';

import { ConfirmToastService } from './confirm-toast.service';

describe('ConfirmToastService', () => {
  let service: ConfirmToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
