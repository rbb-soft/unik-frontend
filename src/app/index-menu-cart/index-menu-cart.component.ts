import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
@Component({
  selector: 'app-index-menu-cart',
  templateUrl: './index-menu-cart.component.html',
  styleUrls: ['./index-menu-cart.component.css']
})
export class IndexMenuCartComponent implements MatMenuModule {

  constructor() { }

  ngOnInit(): void {
  }

}
