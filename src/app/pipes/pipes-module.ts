import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen-pipe';



@NgModule({
  declarations: [

  ],
  exports:[
    ImagenPipe
  ],
  imports: [
    CommonModule,
    ImagenPipe
  ],
})
export class PipesModule { }
