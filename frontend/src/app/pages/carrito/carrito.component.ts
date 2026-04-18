import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  public carritoService = inject(CarritoService);
  private router = inject(Router);
  
  items = this.carritoService.obtenerCarrito();
  total = this.carritoService.total;

  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
  }

  vaciar() {
  alert('¡Gracias por tu compra en SportZone Aguascalientes!');

  this.carritoService.finalizarCompra();

  this.router.navigate(['/catalogo']);
  }

  puedeComprar(): boolean {
  return this.items().every(item => item.stock > 0 && item.cantidad <= item.stock);
  
}
}
