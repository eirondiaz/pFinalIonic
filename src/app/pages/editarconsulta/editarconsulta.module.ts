import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarconsultaPageRoutingModule } from './editarconsulta-routing.module';

import { EditarconsultaPage } from './editarconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarconsultaPageRoutingModule
  ],
  declarations: [EditarconsultaPage]
})
export class EditarconsultaPageModule {}
