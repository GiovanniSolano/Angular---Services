import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaEscritoresComponent,
    InicioComponent,
    DetalleEscritorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
