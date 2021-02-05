import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/Escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

    constructor() { }


    getAll(): Escritor[] {

      return ESCRITORES;

    }

    getAllPromise(): Promise<Escritor[]> {

      return new Promise((resolve, reject) => {
        resolve(ESCRITORES);
      });

    }

    getEscritoresByPais(pPais: string): Promise<Escritor[]> {

      return new Promise((resolve, reject) => {

        const arrEscritores = ESCRITORES.filter(escritoresF => escritoresF.pais === pPais);

        resolve(arrEscritores);

      });

    }

    getById(escritorId): Promise<Escritor> {
      return new Promise((resolve, reject) => {
        const escritorFind = ESCRITORES.find(escritor => escritor.id === escritorId);
        resolve(escritorFind);
      });
    }

}
