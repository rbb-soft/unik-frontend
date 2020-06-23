import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { I_productos } from '../models/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<I_productos[]>('http://localhost/nucleo/model/list.php');
  }
  getCostoEnvio(cp){
    return this.http.get<any>('https://api.mercadolibre.com/sites/MLA/shipping_options?zip_code_from=1744&zip_code_to=' + cp + '&dimensions=70x70x70,1500');
  }
}
