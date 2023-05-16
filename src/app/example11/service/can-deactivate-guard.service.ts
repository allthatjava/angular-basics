import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Example11Component } from '../example11.component';
import { Observable } from 'rxjs';

export interface IDeactivateComponent{
  canExit: ()=>Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent> {

  constructor() { }

  canDeactivate(component:IDeactivateComponent, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)
  {
    return component.canExit();
  }
}
