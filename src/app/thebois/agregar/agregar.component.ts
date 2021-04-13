import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/thebois.interface';
import { TheBoisService } from '../services/thebois.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  // @Input() personajes: Personaje[] = [];
 

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  constructor(private theboisservice: TheBoisService) {

  }


  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // cambiarNombre(event:any){
  //   console.log(event.target.value);     
  // }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ){ return; }
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit( this.nuevo )

    this.theboisservice.agregarPersonaje(this.nuevo );

    // se agrega el nuevo personaje al array con el metodo .push
    // this.personajes.push(this.nuevo)
    // se purgan los campos del formulario
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }


}
