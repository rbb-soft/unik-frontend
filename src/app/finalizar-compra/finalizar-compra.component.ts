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

  ngOnInit(){
    this.getPedido();
  }
  

  // propiedades y metodos de esta clase
  matTabChoose:number=0;
  step1:boolean=false;
  step2:boolean=false;
  step3:boolean=false;
  step4:boolean=false;

  Pedido={
    nombre:"",
    apellido:"",
    email:"",
    contrasenia:"",
    empresa:"",
    cuitCuilDni:0,
    direccion:"",
    numero:0,
    codigoPostal:0,
    ciudad:"",
    provincia:"",
    pais:"",
    telefono:"",
    esDireccionParaFacturacion:true

  }

 
  checkLogin(user,pass):any{
    this.appRoot.ajaxQuery.getLoginService(user,pass).subscribe(
      login => {
        if(login != null){
          this.Pedido=login;
          this.setPedido();
        }
        else{
          alert('Email o Contraseña incorrecto/a\n\
          Puede comprar sin registrarse como invitado\n\
          o registrarse completando el formulario en la solapa:\n\n\
          "Comprar Como Invitado / Registrarse!"');
          this.matTabChoose=1;
        }
      }
      
    );
  }
  
  setPedido():void{
    localStorage.setItem('Pedido',JSON.stringify(this.Pedido));
    //this.appRoot.setPedidoMainApp(this.Pedido);
  }
  getPedido():void{
    this.Pedido= JSON.parse(localStorage.getItem("Pedido")) != null 
                  ?
                    JSON.parse(localStorage.getItem("Pedido")) 
                  :   
                    this.Pedido;
  }

  step_1(){
    let checkPedido:boolean;
    checkPedido=  (this.Pedido.email !== "") && (this.Pedido.nombre !== "") && 
                  (this.Pedido.apellido !== "");
    return checkPedido;
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
