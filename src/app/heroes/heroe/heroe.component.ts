import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'ZedsDead';
    edad: number = 35;

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'C. Rau';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}