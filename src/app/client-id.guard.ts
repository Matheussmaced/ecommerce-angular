import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ClientIdGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
