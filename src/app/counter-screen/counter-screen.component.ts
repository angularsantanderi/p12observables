import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-counter-screen',
  templateUrl: './counter-screen.component.html',
  styleUrls: ['./counter-screen.component.css']
})
export class CounterScreenComponent implements OnInit {

  counter: number = 0;
  subscription: Subscription;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    // this.counter = this.productosService.getNumeroProductos()
    this.subscription = this.productosService.getNumeroProductos()
                        //  .subscribe((data: any) => { // En breve esta sintaxis estará deprecada
                        //    this.counter = data.counter
                        //  }, (err: any) => {
                        //   console.log(err);
                        //  })
                         .subscribe({
                           next: (data: any) => this.counter = data.counter,
                           error: (err: any) => console.log(err)
                         })

  }

}
