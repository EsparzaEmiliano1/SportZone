import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private url = 'http://localhost:3000/api/productos';
  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getProducto(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}