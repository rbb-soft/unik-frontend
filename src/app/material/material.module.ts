import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'; 

const ModulesMaterial= [
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
];


@NgModule({
  
  imports: [
    ModulesMaterial
  ],
  exports:[
    ModulesMaterial
  ]
})
export class MaterialModule { }
