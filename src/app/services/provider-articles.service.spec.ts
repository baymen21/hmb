import { TestBed } from '@angular/core/testing';

import { ProviderArticlesService } from './provider-articles.service';

describe('ProviderArticlesService', () => {
  let service: ProviderArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
