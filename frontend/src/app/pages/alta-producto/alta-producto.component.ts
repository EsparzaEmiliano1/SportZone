import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService, 
    private router: Router 
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, Validators.required],
      categoria: ['', Validators.required],
      imagen: [''],
      marca: [''],
      descripcion: ['']
    });
  }

  guardar() {
    if (this.form.valid) {
      this.productoService.postProducto(this.form.value).subscribe({
        next: (res) => {
          console.log('¡Producto guardado!', res);
          alert('Producto guardado con exito en Aguascalientes');
          this.router.navigate(['/catalogo']); 
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Hubo un error al conectar con el servidor.');
        }
      });
    }
  }
}