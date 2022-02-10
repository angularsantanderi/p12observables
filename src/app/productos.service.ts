import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Array<string> = [];
  // private counter: number = 0;
  private counter = new Subject<any>()

  constructor() { }

  // addProducto(producto: string) {
  //   this.productos.push(producto);
  //   this.counter++;
  // }

  // getNumeroProductos(): number {
  //   return this.counter;
  // }

  getNumeroProductos(): Observable<any> {
    return this.counter.asObservable();
  }

   addProducto(producto: string) {
    this.productos.push(producto);
    this.counter.next({counter: this.productos.length})
  }

}
