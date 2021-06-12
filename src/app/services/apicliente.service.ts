import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';


const httpOption={
  headers: new HttpHeaders({
    'Contend-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  //declaracion de la variabla de sitio a la cual se le hace la peticion
  url: string = "https://localhost:44375/api/cliente";

  constructor(
    private _http:HttpClient
  ) { }


  //metodo get para obtener los clientes de acuerdo al response.ts en la carpeta models
  getCliente(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  add(cliente: Cliente): Observable<Response> {
    return this._http.post<Response>(this.url, cliente, httpOption );
  }
}
