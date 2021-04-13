import { Component } from '@angular/core';
import { Personaje } from '../interfaces/thebois.interface';
import { TheBoisService } from '../services/thebois.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // personajes: Personaje[] = []; 


  nuevo: Personaje = {
    nombre: 'Omi',
    poder: 40000
  }

  // get personajes(): Personaje[] {
  //   return this.theboisservice.personajes;
  // }

  agregarNuevoPersonaje( argumento: Personaje) {
    // console.log("Main Page Component");
    // debugger;  
    // console.log(argumento);
    // this.personajes.push(argumento)
  }

  constructor() {
    // this.personajes = this.theboisservice.personajes
  }




}
