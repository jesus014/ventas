import { Injectable } from "@angular/core";
import { ApiauthService } from '../services/apiauth.service';
import{Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';

@Injectable({providedIn: 'root'})
//se implementa canactive para el uso en las ventanas y control
export class AuthGuard implements CanActivate{

  constructor(private router: Router,
              private apiauthService: ApiauthService){

  }


  //validaciones que se hacen si estas logeado o no.

canActivate(route: ActivatedRouteSnapshot ){

  const usuario =this.apiauthService.usuarioData;

  if(usuario){
    return true;
  }
  this.router.navigate(['/login']);
  return false;

}

}
