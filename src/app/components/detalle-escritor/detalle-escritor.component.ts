import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from '../../services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritorDetalle: Escritor;

  constructor(private activatedRoute: ActivatedRoute,
    private _escritoresService: EscritoresService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async escritorId => {
      this.escritorDetalle = await this._escritoresService.getById(parseInt(escritorId.id));
    });

  }
  

}
