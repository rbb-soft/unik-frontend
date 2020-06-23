import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PupupComponent } from './pupup/pupup.component';
import { DataService } from './service/data.service';
import { I_productos } from './models/productos.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Dcarrito:I_productos[]=[];
  Dproductos:I_productos[]=[];
  cartTotalItems:number=0;

  constructor(public dialog: MatDialog, public productos:DataService){}

  getStorageCart(){
    return JSON.parse(localStorage.getItem("Items")) != null ? JSON.parse(localStorage.getItem("Items")) : [];
  }
  getStorageTotalCartItems(){
    return JSON.parse(localStorage.getItem("cartTotalItems")) != null ? JSON.parse(localStorage.getItem("cartTotalItems")) : 0;
  }
  dropStorage(){
   localStorage.clear();
  }
 
  vaciarCarritoMain(){
    console.log('vaciando carrito desde main');
    this.Dcarrito=[];
    this.cartTotalItems=0;
    this.dropStorage(); 
  } 

  ngOnInit(){
    this.productos.getProductos().subscribe(
      productos => {
        this.Dproductos=productos;
      }
    );
      this.Dcarrito=this.getStorageCart();
      this.cartTotalItems=this.getStorageTotalCartItems();
  }

  getCurrentRoute(url){
    return ((window.location.href).split('/')[(window.location.href).split('/').length -1]) == url;
  }

  
  
 
  addToCart(item:I_productos){
    
    
    if(this.cartTotalItems > 0){
      for(let itemCart of this.Dcarrito){
        if(item.id == itemCart.id){
          alert('El producto ya esta incluido en el Carrito\nPuedes elegir la cantidad luego en el carrito!');
          return;
        }
      }
    }
    item.cantidad=1;
    item.subtotal=item.precio;
    this.Dcarrito.push(item);
    this.cartTotalItems=this.Dcarrito.length;
    localStorage.setItem('Items',JSON.stringify(this.Dcarrito));
    localStorage.setItem('cartTotalItems',JSON.stringify(this.cartTotalItems));

    // Open Modal
    let dialogRef = this.dialog.open(PupupComponent,{data:{producto:item}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
    // end open modal
  }
}
