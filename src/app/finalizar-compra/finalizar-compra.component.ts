import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { I_pedido } from '../models/Pedido.interface';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  // globales
  constructor(public appRoot:AppComponent) { }

  ngOnInit(): void {
  }

  // propiedades y metodos de esta clase
  Pedido:I_pedido=this.appRoot.Dpedido;
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  step4:boolean=false;

  paso1():void{
    if(this.Pedido.contrasenia ===''){
      console.log('como invitado');
    }else{
      console.log('registrar');
      
    }
    this.step1=false
  }

  paso2(){

  }
  paso3(){

  }

  checkLogin(user,pass){
   this.appRoot.getLoginMainApp(user,pass);
   this.Pedido=this.appRoot.Dpedido;
   console.log('Pedido: ',this.Pedido);
   console.log('this.appRoot.Dpedido): ',this.appRoot.Dpedido);
  }
  
  ahorroDetipeo(){
    this.Pedido={
      nombre:'Richard',
      apellido:'Barolin',
      email:'a@a.a',
      contrasenia:'ri94036144',
      empresa:'RBB',
      cuitCuilDni:1234567890,
      direccion:'av popo',
      numero:1234,
      codigoPostal:1744,
      ciudad:'Moreno',
      provincia:'Buenos Aires',
      pais:'Argentina',
      telefono:'123456789',
      esDireccionParaFacturacion:true
    };
  }

  setPedido(){
    localStorage.setItem('Pedido',JSON.stringify(this.Pedido));
    //this.appRoot.setPedidoMainApp(this.Pedido);
  }

  // mismos metodos y propiedades que en carrito, para mostrar Resumen de compra
  codigoPostal:number=0;
  costoEnvio:number=0;
  tiempoDeEnvioEstimado:string;
  meses:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto", "Septiembre","Noviembre","Diciembre"];

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
    this.appRoot.productos.getCostoEnvio(cp).subscribe(
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
