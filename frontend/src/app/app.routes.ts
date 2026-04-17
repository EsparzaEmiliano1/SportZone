import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component'; 
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'alta-producto', component: AltaProductoComponent },
    { path: 'productos/:id', component: DetalleComponent }, 
    { path: 'carrito', component: CarritoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'productos/:id', component: ProductoDetalleComponent },
    { path: '**', redirectTo: 'inicio' }  // Para rutas 404, redirige a inicio 
];