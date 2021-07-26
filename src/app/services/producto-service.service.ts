import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private url = 'https://radiant-sea-15072.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  listarProductos(){

    return this.http.get<Producto[]>(
      `${this.url}productos`);
   }

   getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}productos`);
  }
}
