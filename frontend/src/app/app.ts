import { Component, signal } from '@angular/core'; 
import { RouterOutlet, RouterLink } from '@angular/router';
import { CarritoService } from './services/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('frontend');  
    cantidad; 

  constructor(public carritoService: CarritoService) {
    this.cantidad = this.carritoService.cantidadItems;
  }
}