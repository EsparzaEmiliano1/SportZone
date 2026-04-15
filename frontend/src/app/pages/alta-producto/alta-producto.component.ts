import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Campos del formulario y sus obligatorios
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, Validators.required],
      categoria: ['', Validators.required],
      imagen: ['']
    });
  }

  guardar() {
    if (this.form.valid) {
      console.log('--- Datos capturados ---');
      console.log(this.form.value);
      alert('¡Datos capturados en consola! Mañana los mandaremos a MySQL.');
    }
  }
}