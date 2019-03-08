import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { RestResponse } from './../util/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public iniciarSesion(usuario: String, clave: String): Observable<RestResponse> {
    let url = 'http://localhost:8080/BackEndAngular/iniciarSesion' + '?usuario=' + usuario + '&&clave=' + clave;
    alert(url);
    return this.http.get<RestResponse>(url);
  }

}
