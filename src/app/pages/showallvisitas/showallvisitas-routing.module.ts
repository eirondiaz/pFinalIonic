import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardvisitaComponent } from "../../components/cardvisita/cardvisita.component";

import { ShowallvisitasPage } from './showallvisitas.page';

const routes: Routes = [
  {
    path: '',
    component: ShowallvisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowallvisitasPageRoutingModule {}
