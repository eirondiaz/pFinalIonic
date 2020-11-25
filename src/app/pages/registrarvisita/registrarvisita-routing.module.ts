import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarvisitaPage } from './registrarvisita.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarvisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarvisitaPageRoutingModule {}
