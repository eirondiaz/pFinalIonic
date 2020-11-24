import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowconsultaPage } from './showconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: ShowconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowconsultaPageRoutingModule {}
