import { I_productos } from './productos.interface';
import { I_pedido } from './Pedido.interface';
import { I_envio } from './Envio.interface';

export interface I_compra{
    "Productos":I_productos[],
    "Pedido":I_pedido,
    "Envio":I_envio

}