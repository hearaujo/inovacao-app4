import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

/**Services.*/
import { AuthenticationService } from './authentication.service';
import { Usuario } from '../shared/model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario: Usuario = sessionStorage.getItem('usuario')
      ? JSON.parse(sessionStorage.getItem('usuario'))
      : null;

      if (usuario) {
        return true;
      } else {
        this.authenticationService.logout();
        return false;
      }

  }

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario: Usuario = sessionStorage.getItem('Usuario')
      ? JSON.parse(sessionStorage.getItem('usuario'))
      : null;

    if (usuario) {
      return true;
    } else {
      this.authenticationService.logout();
      return false;
    }
  }
}
