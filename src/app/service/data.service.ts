import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { I_productos } from '../models/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<I_productos[]>('http://localhost/core/model/crud.php');
  }
}
