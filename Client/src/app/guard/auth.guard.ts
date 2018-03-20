import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SharedService } from '../service/shared';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _shared: SharedService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    //if (localStorage.getItem('currentUser')||sessionStorage.getItem('currentUser')) {
    //logged in so return true
    if (this._shared.currentUser) {
      return true;
    }
    //not logged in so redirect to login page with the return url
    this.router.navigateByUrl('/login')
    return false;
  }
}
