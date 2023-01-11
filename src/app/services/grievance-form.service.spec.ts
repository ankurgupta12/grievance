import { TestBed } from '@angular/core/testing';

import { GrievanceFormService } from './grievance-form.service';

describe('GrievanceFormService', () => {
  let service: GrievanceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrievanceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
