import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { selectionAuthGuard } from './selection-auth.guard';

describe('selectionAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => selectionAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
