import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductoService {

  private API = 'https://TU-BACKEND.onrender.com/api/productos'; // 🔥 CAMBIA ESTO

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  getProductoById(id: string | number) {
    return this.http.get(`${this.API}/${id}`);
  }

  getProducto(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  postProducto(producto: any) {
    return this.http.post(this.API, producto);
  }
}