import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
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
      // Clonamos el array y el objeto para mantener la inmutabilidad de Signals
      const nuevoCarrito = [...actual];
      nuevoCarrito[index] = { ...nuevoCarrito[index], cantidad: nuevoCarrito[index].cantidad + 1 };
      this.carrito.set(nuevoCarrito);
    } else {
      // Requisito: Agregar productos al carrito 
      this.carrito.set([...actual, { ...producto, cantidad: 1 }]);
    }
  }

  // Requisito: Quitar al menos un producto 
  eliminarProducto(id: number) {
    this.carrito.set(this.carrito().filter(p => p.id !== id));
  }

  limpiarCarrito() {
    this.carrito.set([]);
  }
}