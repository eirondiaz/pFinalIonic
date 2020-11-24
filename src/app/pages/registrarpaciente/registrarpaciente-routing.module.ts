import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarpacientePage } from './registrarpaciente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarpacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarpacientePageRoutingModule {}
