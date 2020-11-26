import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ShowallvisitasPageRoutingModule } from './showallvisitas-routing.module';

import { ShowallvisitasPage } from './showallvisitas.page';
import { CardvisitaComponent } from 'src/app/components/cardvisita/cardvisita.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowallvisitasPageRoutingModule
  ],
  declarations: [ShowallvisitasPage,
                CardvisitaComponent]
})
export class ShowallvisitasPageModule {}
