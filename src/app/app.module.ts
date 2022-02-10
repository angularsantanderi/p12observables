import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { NavComponent } from './nav/nav.component';
import { CounterScreenComponent } from './counter-screen/counter-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavComponent,
    CounterScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
