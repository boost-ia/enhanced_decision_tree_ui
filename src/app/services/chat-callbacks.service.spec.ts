import { TestBed } from '@angular/core/testing';

import { ChatCallbacksService } from './chat-callbacks.service';

describe('ChatCallbacksService', () => {
  let service: ChatCallbacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatCallbacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
