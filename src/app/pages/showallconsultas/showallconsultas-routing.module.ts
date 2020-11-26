import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowallconsultasPage } from './showallconsultas.page';

const routes: Routes = [
  {
    path: '',
    component: ShowallconsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowallconsultasPageRoutingModule {}
