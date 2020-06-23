import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PupupComponent } from './pupup/pupup.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexMenuCartComponent } from './index-menu-cart/index-menu-cart.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    PupupComponent,
    IndexMenuCartComponent,
    HomeComponent,
    CarritoComponent,
    FinalizarCompraComponent,
    
  ],
  entryComponents:[PupupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
