import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from  '@angular/core';
import { GuardComponent } from '../guard/guard.component';

export const authGuardGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router: Router = inject(Router);
  const protectedRoutes: string [] = ['/testGuard'];

  const resultStr = localStorage.getItem('result');
  const result = resultStr !== null ? parseFloat(resultStr) : NaN; // Nan if result null else convert to float the string

  if (state.url === protectedRoutes[0] && result % 2 !== 0) {
    return router.createUrlTree(['/home']); 
  }
  return true;
};
