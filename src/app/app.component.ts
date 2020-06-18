import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PupupComponent } from './pupup/pupup.component';
import { DataService } from './service/data.service';
import { I_productos } from './models/productos.interface';
import { I_Carrito } from './models/carrito.interface';

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

  ngOnInit(){
    this.productos.getProductos().subscribe(
      productos => {
        this.Dproductos=productos;
      }
    )
  }
  addToCart(item){
    this.Dcarrito.push(item);
    this.cartTotalItems=this.Dcarrito.length;

    // Open Modal
    let dialogRef = this.dialog.open(PupupComponent,{data:{producto:item}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
    // end open modal
  }
}
