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



  constructor() {
  }




}
