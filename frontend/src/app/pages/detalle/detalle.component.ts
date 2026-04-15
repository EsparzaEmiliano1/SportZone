import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html', 
  styleUrl: './detalle.component.css'      
})

export class DetalleComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.productoService.getProducto(Number(id)).subscribe({
        next: (res) => {
          this.producto = res;
          this.cdr.detectChanges(); // Refrescamos la vista
        },
        error: (err) => console.error('Error al cargar el detalle:', err)
      });
    }
  }
}