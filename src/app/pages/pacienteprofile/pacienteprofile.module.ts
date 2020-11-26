import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteprofilePageRoutingModule } from './pacienteprofile-routing.module';

import { PacienteprofilePage } from './pacienteprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteprofilePageRoutingModule
  ],
  declarations: [PacienteprofilePage]
})
export class PacienteprofilePageModule {}
