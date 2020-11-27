import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarconsultaPage } from './editarconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarconsultaPageRoutingModule {}
