import { TestBed } from '@angular/core/testing';

import { PharmacienloginService } from './pharmacienlogin.service';

describe('PharmacienloginService', () => {
  let service: PharmacienloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacienloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
