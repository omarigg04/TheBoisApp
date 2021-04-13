import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AgregarComponent } from './agregar/agregar.component';
import { TheBoisService } from './services/thebois.service';




@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TheBoisService
  ]
})
export class TheboisModule { }
