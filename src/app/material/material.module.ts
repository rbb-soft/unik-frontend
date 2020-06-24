import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatTabsModule} from '@angular/material/tabs';  
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'

const ModulesMaterial= [
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatMenuModule,
  MatStepperModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule
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
