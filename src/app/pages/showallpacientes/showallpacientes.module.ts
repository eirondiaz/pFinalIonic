import { CardpacienteComponent } from './../../components/cardpaciente/cardpaciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowallpacientesPageRoutingModule } from './showallpacientes-routing.module';

import { ShowallpacientesPage } from './showallpacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowallpacientesPageRoutingModule
  ],
  declarations: [
    ShowallpacientesPage, 
    CardpacienteComponent
  ]
})
export class ShowallpacientesPageModule {}
