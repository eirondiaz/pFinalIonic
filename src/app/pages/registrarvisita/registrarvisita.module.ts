import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarvisitaPageRoutingModule } from './registrarvisita-routing.module';

import { RegistrarvisitaPage } from './registrarvisita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarvisitaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarvisitaPage]
})
export class RegistrarvisitaPageModule {}
