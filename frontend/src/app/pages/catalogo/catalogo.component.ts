import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el *ngFor
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  // Aqui guardamos lo que llegue de la base de datos
  productos: any[] = [];

  constructor(
      private productoService: ProductoService,
      private cdr: ChangeDetectorRef 
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
}