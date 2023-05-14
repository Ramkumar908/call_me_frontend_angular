import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { flatten } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
    let role=localStorage.getItem("userType");
    if(role=='admin')
    {
      return true;
    }
    alert("You dont have rights to access this page")
    return false;
  }
  
}
