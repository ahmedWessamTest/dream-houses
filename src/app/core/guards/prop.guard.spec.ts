import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { propGuard } from './prop.guard';

describe('propGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => propGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
