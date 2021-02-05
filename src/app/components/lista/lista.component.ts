import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  // providers: [PersonasService]
})
export class ListaComponent implements OnInit {

  personas: Persona[];

  constructor(private _personasService: PersonasService) { }

  ngOnInit(): void {

    this.personas = this._personasService.getPersonas();

  }

}
