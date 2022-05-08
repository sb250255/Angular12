import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from './auth.service'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurd implements CanActivate{

constructor(private authSrv : AuthService, private router : Router){

}

canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
{
            //   return  this.authSrv.IsAuthenticated().then(
            //         (response : boolean) => {   
            //                 if(response){
            //                     return true;
            //                 }else{
            //                     return false;
            //                 }
            //         }

            return this.authSrv.IsAuthenticated().then(
                    (response : boolean) => {
                        if (response) {
                                return true;
                            } else {
                                this.router.navigate(['/not-found'])
                        }
            }
      );
}

}