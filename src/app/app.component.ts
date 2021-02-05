import { Component } from '@angular/core';
import { Persona } from './models/Persona.model';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent {
  title = 'services';

  personas: Persona[];


  constructor(private _personasService: PersonasService) {
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.personas = this._personasService.getPersonas();

    
  }

  onClick() {

    this._personasService.create(new Persona('Nueva', 'Persona', 45, true));

  }

  async onClickActivas() {

    // this._personasService.getPersonasActivas()
    //   .then(arrTempPersonas => console.log(arrTempPersonas))
    //   .catch(error => console.log(error));

    try {
      this.personas = await this._personasService.activasV2()
      
    } catch (error) {
      console.log(error);
      
    }

  }

}
