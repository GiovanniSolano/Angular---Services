import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[];

  constructor() {

    this.personas = [
      new Persona('Mario', 'Solano', 33, true),
      new Persona('Maria', 'Segura', 66, false),
      new Persona('Giovanni', 'Reyes', 23, true),
      new Persona('Mar', 'Salgado', 34, true),
    ];

   }


   getPersonas() {
     return this.personas;
   }

   create(personaNueva: Persona) {
     this.personas.push(personaNueva);
   }

   getPersonasActivas(): Promise<Persona[]> {

    const prom = new Promise<Persona[]>((resolve, reject) => {

      const arrTemp = [];

      for (const persona of this.personas) {
        if(persona.activo) {
          arrTemp.push(persona);
        }
      }

      resolve(arrTemp);

      

    }); 

    return prom;

   }

   activasV2(): Promise<Persona[]> {
     return new Promise((resolve, reject) => {

      resolve(this.personas.filter(personaE => personaE.activo));

     });
   }

}
