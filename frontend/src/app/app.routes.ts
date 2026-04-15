import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio'; 
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';

// Rutas dinamicas para navegar entre componentes   
export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'productos/:id', component: DetalleComponent },     
    { path: 'alta-producto', component: AltaProductoComponent },
    { path: 'productos/:id', component: DetalleComponent },
    { path: '**', redirectTo: 'inicio' } // Para rutas 404, redirige a inicio 
];

