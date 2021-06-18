import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from '../services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public apiauthService: ApiauthService,
              private router: Router) {
                
                if(this.apiauthService.usuarioData){
                  this.router.navigate(['/']);
                }
              }

  ngOnInit(): void {
  }

  //creacion del metodo login pasandole los parametros. en dado que haya exito
  login(){
    this.apiauthService.login(this.email, this.password).subscribe(response =>{

      if(response.exito===1){
        this.router.navigate(['/']);
      }
    })
  }



}
