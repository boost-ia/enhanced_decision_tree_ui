import { TestBed } from '@angular/core/testing';

import { DiscussionManagerService } from './discussion-manager.service';

describe('DiscussionManagerService', () => {
  let service: DiscussionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscussionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
