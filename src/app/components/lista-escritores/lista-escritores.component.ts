import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../../services/escritores.service';
import { Escritor } from '../../models/Escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  escritores: Escritor[];

  constructor(private _listaEscritores: EscritoresService) { }

  async ngOnInit() {
    // this.escritores = this._listaEscritores.getAll();

    // this._listaEscritores.getAllPromise()
    //   .then(escritores => {
    //     this.escritores = escritores;
    //   }).catch(err => console.log(err));

    this.escritores = await this._listaEscritores.getAllPromise();

    
  }


  async onChange(pais) {
    if(pais.target.value === 'todos') {
      this.escritores = await this._listaEscritores.getAllPromise();
    } else {
      this.escritores = await this._listaEscritores.getEscritoresByPais(pais.target.value);
    }
    
  }

}
