import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';
import { Libro } from '../models/Libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritor(escritoId): Promise<Libro[]> {
    return new Promise((resolve, reject) => {

      const arrFiltrado = LIBROS.filter(libro => libro.escritor === escritoId);

      resolve(arrFiltrado);

    });
  }

}
