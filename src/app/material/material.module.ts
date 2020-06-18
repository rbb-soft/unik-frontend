import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatBadgeModule} from '@angular/material/badge'; 

const ModulesMaterial= [
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule
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
