import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { I_productos } from '../models/productos.interface';
import { I_pedido } from '../models/Pedido.interface';
import { I_compra } from '../models/Compra.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getProductosService(){
    return this.http.get<I_productos[]>('http://localhost/nucleo/model/list.php');
  }
  getCostoEnvio(cp){
    return this.http.get<any>('https://api.mercadolibre.com/sites/MLA/shipping_options?zip_code_from=1744&zip_code_to=' + cp + '&dimensions=70x70x70,1500');
  }
  setPedidoService(pedido:I_pedido){
    return this.http.post<I_pedido>('http://localhost/nucleo/model/createPedido.php', pedido);
  }
  getLoginService(user:string,pass:string){
    return this.http.post<I_pedido>('http://localhost/nucleo/model/getLogin.php', {'user':user,'pass':pass});
  }
  setCompraService(compra:I_compra){
    return this.http.post<I_compra>('http://localhost/nucleo/model/setCompra.php',compra);
  }
  setPagoService(compra:I_compra){
    return  this.http.post('http://localhost/nucleo/model/setPago.php', compra,
      {
         headers: new HttpHeaders().set('Content-Type', 'text/html; charset=utf-8'),
         responseType: 'text' 
      }
      );
  }
}
