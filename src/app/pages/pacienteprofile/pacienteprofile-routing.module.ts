import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteprofilePage } from './pacienteprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteprofilePageRoutingModule {}
