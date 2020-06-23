import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'carrito',component:CarritoComponent},
  {path: 'finalizarCompra',component:FinalizarCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
