import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service'; // Ajusta la ruta si es necesario
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  // Inyectamos el servicio (la forma moderna en Angular 17/18)
  public carritoService = inject(CarritoService);
  
  // Creamos referencias locales a los signals del servicio para facilitar el uso en HTML
  items = this.carritoService.obtenerCarrito();
  total = this.carritoService.total;

  // Métodos que el HTML llamará mediante (click)
  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
  }

  vaciar() {
    alert('¡Gracias por tu compra en SportZone!');
    this.carritoService.limpiarCarrito();
  }
  
}