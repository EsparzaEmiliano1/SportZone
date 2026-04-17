import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito = signal<any[]>([]);

  public total = computed(() => {
    return this.carrito().reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  });

  public cantidadItems = computed(() => {
    return this.carrito().reduce((acc, p) => acc + p.cantidad, 0);
  });

  // Metodo para obtener la lista (lectura)
  obtenerCarrito() {
    return this.carrito;
  }

  // Logica para agregar productos
  agregarProducto(producto: any) {
    const actual = this.carrito();
    const index = actual.findIndex(p => p.id === producto.id);

    if (index !== -1) {
      // Si el producto ya existe, creamos una copia del array y aumentamos la cantidad
      const nuevoCarrito = [...actual];
      nuevoCarrito[index].cantidad++;
      this.carrito.set(nuevoCarrito);
    } else {
      // Si es nuevo, lo añadimos con cantidad inicial de 1
      this.carrito.set([...actual, { ...producto, cantidad: 1 }]);
    }
  }

  // Eliminar un producto especifico
  eliminarProducto(id: number) {
    this.carrito.set(this.carrito().filter(p => p.id !== id));
  }

  // Limpiar todo el carrito
  limpiarCarrito() {
    this.carrito.set([]);
  }
}