import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-index-menu-cart',
  templateUrl: './index-menu-cart.component.html',
  styleUrls: ['./index-menu-cart.component.css']
})
export class IndexMenuCartComponent implements MatMenuModule {

  constructor(public appRoot: AppComponent) { }

  vaciarCarrito(){
    this.appRoot.vaciarCarritoMain();
  }

}
