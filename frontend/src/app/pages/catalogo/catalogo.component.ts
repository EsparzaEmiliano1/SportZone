import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el *ngFor
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { ProductoCardComponent } from '../../components/producto-card/producto-card.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductoCardComponent], 
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  // Aqui guardamos lo que llegue de la base de datos
  productos: any[] = [];

  constructor(
      private productoService: ProductoService,
      private cdr: ChangeDetectorRef,
      private carritoService: CarritoService
    ) {}



  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log('Productos recibidos:', data);
        
        
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error al conectar con el backend:', err);
      }
    });
  }
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    console.log('Producto enviado al carrito:', producto.nombre);
  }
}