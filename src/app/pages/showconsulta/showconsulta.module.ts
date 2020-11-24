import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowconsultaPageRoutingModule } from './showconsulta-routing.module';

import { ShowconsultaPage } from './showconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowconsultaPageRoutingModule
  ],
  declarations: [ShowconsultaPage]
})
export class ShowconsultaPageModule {}
