import { CardpacientezodiacComponent } from './../../components/cardpacientezodiac/cardpacientezodiac.component';
import { CardpacienteComponent } from './../../components/cardpaciente/cardpaciente.component';
import { CardvisitaComponent } from './../../components/cardvisita/cardvisita.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesPageRoutingModule } from './reportes-routing.module';

import { ReportesPage } from './reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesPageRoutingModule
  ],
  declarations: [
    ReportesPage, 
    CardvisitaComponent, 
    CardpacienteComponent,
    CardpacientezodiacComponent
  ]
})
export class ReportesPageModule {}
