import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PupupComponent } from './pupup/pupup.component';
import { DataService } from './service/data.service';
import { I_productos } from './models/productos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Unica Sport -- Tienda';
  Dproductos:I_productos[]=[];

  constructor(public dialog: MatDialog, public productos:DataService){}

  ngOnInit(){
    this.productos.getProductos().subscribe(
      productos => {
        this.Dproductos=productos;
      }
    )
  }
  openDialog(item){
    let dialogRef = this.dialog.open(PupupComponent,{data:{producto:item}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
