import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

/**
 * This service activate the example9 link. Please check app-routing.module.ts
 */
@Injectable({
    providedIn: 'root'
  })
export class CourseGuardService implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router){

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("called canActivateChild guard");
        return this.canActivate(childRoute, state);
    }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
     }
}