import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const propGuard: CanActivateFn = (route, state) => {
  const _PLATFORM_ID = inject(PLATFORM_ID);
  const _Router = inject(Router);
  if(isPlatformBrowser(_PLATFORM_ID)){
    if (sessionStorage.getItem('homeType') && sessionStorage.getItem('userPlace')){
      return true
    }
    else {
      _Router.navigate(['/house'])
      return false
    }
  }else{
    return false;
  }
};
