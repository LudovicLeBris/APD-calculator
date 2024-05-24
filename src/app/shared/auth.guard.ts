import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.isLogged);

  if (authService.isLogged) {
    return true;
  }

  router.navigate(['connexion']);
  return false;

};
