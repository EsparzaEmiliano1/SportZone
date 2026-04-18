import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 🔥 IMPORTANTE

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) {} // 🔥 NECESARIO

  // Signal privado para el estado del carrito 
  private carrito = signal<any[]>([]);

  // Signal computada para el total general 
  public total = computed(() => {
    return this.carrito().reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  });

  // Signal computada para el contador de la Navbar 
  public cantidadTotal = computed(() => {
    return this.carrito().reduce((acc, p) => acc + p.cantidad, 0);
  });

  obtenerCarrito() {
    return this.carrito;
  }

  agregarProducto(producto: any) {
    const actual = this.carrito();
    const index = actual.findIndex(p => p.id === producto.id);

    if (index !== -1) {
      const nuevoCarrito = [...actual];
      nuevoCarrito[index] = { 
        ...nuevoCarrito[index], 
        cantidad: nuevoCarrito[index].cantidad + 1 
      };
      this.carrito.set(nuevoCarrito);
    } else {
      this.carrito.set([...actual, { ...producto, cantidad: 1 }]);
    }
  }

  eliminarProducto(id: number) {
    this.carrito.set(this.carrito().filter(p => p.id !== id));
  }

  limpiarCarrito() {
    this.carrito.set([]);
  }

finalizarCompra() {
  const carritoActual = this.carrito();

  carritoActual.forEach(producto => {
    this.http.put(
      `http://localhost:3000/api/productos/${producto.id}/stock`,
      { cantidad: producto.cantidad }
    ).subscribe();
  });

  this.carrito.set([]);
}
  }
