import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  codigoPostal:number=0;
  costoEnvio:number=0;
  tiempoDeEnvioEstimado:string;
  meses:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto", "Septiembre","Noviembre","Diciembre"];

  constructor(public appRoot:AppComponent) { }

  ngOnInit(): void {
  }

  getSubtotal(id,precio,cantidad){
    this.appRoot.Dcarrito[id].subtotal=(parseFloat(precio)*cantidad);
    localStorage.setItem('Items',JSON.stringify(this.appRoot.Dcarrito));
    localStorage.setItem('cartTotalItems',JSON.stringify(this.getTotalItemsWithSubtotal()));
    this.appRoot.cartTotalItems=this.getTotalItemsWithSubtotal();
  }

  delItem(id){
    console.log(id);
    this.appRoot.Dcarrito.splice(id,id+1);
    this.appRoot.cartTotalItems=this.appRoot.Dcarrito.length
    localStorage.setItem('Items',JSON.stringify(this.appRoot.Dcarrito));
    localStorage.setItem('cartTotalItems',JSON.stringify(this.appRoot.Dcarrito.length));
  }

  getTotalItemsWithSubtotal(){
    let total:number=0;
    this.appRoot.Dcarrito.forEach(
      element => total+=element.cantidad
    );
    return total
  }
  getTotalPriceItemsWithSubtotal(){
    let total:number=0;
    this.appRoot.Dcarrito.forEach(
      element => total+=parseFloat(element.subtotal)
    );
    return total
  }
  
  getCostoEnvio(cp){
    let costo:number=0;
    this.appRoot.ajaxQuery.getCostoEnvio(cp).subscribe(
      envio => {
        let fecha= new Date(envio.options[0].estimated_delivery_time.date);
        let mes= this.meses[fecha.getMonth()];
				let dia= fecha.getDate();
        this.costoEnvio=envio.options[0].cost;;
        this.tiempoDeEnvioEstimado="llega el " + dia + " de " + mes
      },
      error => alert('codigo postal incorrecto!')
    )
    
  }
 
  
}
