import {Component} from '@angular/core';



@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

    <span> {{numero}} </span>

    <button (click)="acumular(1)">+1</button>

    <button (click)="acumular(-1)">-1</button>

    <button (click)="reset()">RST</button>
    
    
    `
})
export class ContadorComponent{

    title: string = 'Contador App';
    numero: number = 0;
    valor: number = 0;
  
    // sumar(){
    //   this.numero += 1;
    // }
    
    // restar(){
    //   this.numero -= 1;
    // }
  
    reset() {
      this.numero = 0;
    } 
  
    acumular( valor: number ){
      this.numero += valor;
      
    }
}