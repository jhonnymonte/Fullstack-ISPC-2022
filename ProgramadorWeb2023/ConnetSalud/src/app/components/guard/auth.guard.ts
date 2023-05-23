import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable( {providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true
    }
    alert('Usted no tiene Acceso');
    this.router.navigate(['/login']);
    return false;

  }
}
