import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private http = inject(HttpClient);
  
  contacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;

  enviarMensaje() {
    console.log('Datos a enviar:', this.contacto);
    
    this.http.post('http://localhost:3000/api/mensajes', this.contacto)
      .subscribe({
        next: (res) => {
          this.enviado = true;
          setTimeout(() => {
            this.enviado = false;
            this.contacto = { nombre: '', correo: '', asunto: '', mensaje: '' };
          }, 3000);
        },
        error: (err) => alert('Error al enviar el mensaje. ¿Ya levantaste el backend?')
      });
  }
}