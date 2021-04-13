import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/thebois.interface';



@Injectable()
export class TheBoisService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Diego',
          poder: 2000
        },
        {
          nombre: 'Frank',
          poder: 2000
        }
      ];

      get personajes(): Personaje[] {
          //El spread rompe la referencia con los "Personajes"
          return [...this._personajes]
      }

    constructor(){
        console.log("Servicio inicializado");
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje)
    }

}