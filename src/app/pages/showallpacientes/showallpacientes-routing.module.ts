import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowallpacientesPage } from './showallpacientes.page';

const routes: Routes = [
  {
    path: '',
    component: ShowallpacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowallpacientesPageRoutingModule {}
