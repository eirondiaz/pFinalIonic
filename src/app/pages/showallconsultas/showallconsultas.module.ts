import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardconsultaComponent } from "../../components/cardconsulta/cardconsulta.component";

import { IonicModule } from '@ionic/angular';

import { ShowallconsultasPageRoutingModule } from './showallconsultas-routing.module';

import { ShowallconsultasPage } from './showallconsultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowallconsultasPageRoutingModule
  ],
  declarations: [ShowallconsultasPage,
                CardconsultaComponent]
})
export class ShowallconsultasPageModule {}
