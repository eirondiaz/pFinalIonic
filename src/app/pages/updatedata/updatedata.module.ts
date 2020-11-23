import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatedataPageRoutingModule } from './updatedata-routing.module';

import { UpdatedataPage } from './updatedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatedataPage]
})
export class UpdatedataPageModule {}
