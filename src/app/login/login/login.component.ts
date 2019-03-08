import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './../login.service';

import { JwtHelperService } from '@auth0/angular-jwt';

import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, JwtHelperService]
})
export class LoginComponent implements OnInit {

  usuario = '';
  clave = '';

  tokenEncriptado: String;

  constructor(public loginService: LoginService, public router: Router) {
    this.loginService = loginService;
  }

  ngOnInit() {
  }

  iniciarSesion(): void {
    this.loginService.iniciarSesion(this.usuario, this.clave).subscribe(res => {alert(res.jwt);
      if (res.jwt != 'error') {
        let userLogeado = jwt_decode(res.jwt);


        this.router.navigate(['/inicio']);

        localStorage.setItem('nombresUser', userLogeado.nombres);
        localStorage.setItem('cargoUser', userLogeado.cargo);
        localStorage.setItem('emailUser', userLogeado.email);
      } else {
        alert('ERROR AL LOGEARSE');
        this.usuario= '', this.clave= '';
      }

    });
  }

}
