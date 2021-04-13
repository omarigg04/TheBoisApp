import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/thebois.interface';
import { TheBoisService } from '../services/thebois.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',

})
export class CharactersComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes(){
    return this.theboisservice.personajes;
  }
  constructor( private theboisservice: TheBoisService) {  }
}
