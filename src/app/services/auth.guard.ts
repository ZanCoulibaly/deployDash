import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router){}

 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot):Observable<boolean> | boolean{
     let userData = localStorage.getItem("logInfo");
     if(userData)
     {
       return true
     }

     this.route.navigate(['/login']);
     return false;
   }

}
