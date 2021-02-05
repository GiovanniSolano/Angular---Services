import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';

const routes: Routes = [
  {path: 'escritores', component: ListaEscritoresComponent},
  {path: 'escritor/:id', component: DetalleEscritorComponent,
  children: [
    {path: 'libros', component: ListaLibrosComponent}
  ]},
  {path: 'inicio', component: InicioComponent},
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: '**', redirectTo: '/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
