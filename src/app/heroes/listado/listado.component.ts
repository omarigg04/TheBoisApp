import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Maurizio', 'Plastikman', 'Moritz','DJKoze'];
  heroDeleted: string = '';

  borrarHeroe(){
    this.heroDeleted = this.heroes.shift() || '';
    
  }

}
