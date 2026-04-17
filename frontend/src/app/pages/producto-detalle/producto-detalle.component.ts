import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);

  producto: any = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProductoById(id).subscribe({
        next: (data) => this.producto = data,
        error: (err) => console.error('Error al cargar el detalle:', err)
      });
    }
  }

  agregar() {
    if (this.producto) {
      this.carritoService.agregarProducto(this.producto);
      alert(`${this.producto.nombre} agregado al carrito`);
    }
  }
}