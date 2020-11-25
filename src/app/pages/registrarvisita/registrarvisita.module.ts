import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarvisitaPageRoutingModule } from './registrarvisita-routing.module';

import { RegistrarvisitaPage } from './registrarvisita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarvisitaPageRoutingModule
  ],
  declarations: [RegistrarvisitaPage]
})
export class RegistrarvisitaPageModule {}
