import { MedicoService } from './../../services/medico.service';
//import { Medico } from './../../models/Medico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  medico = {}

  constructor(
    private medicoService: MedicoService
  ) { }

  ngOnInit() {
    //this.getCurrentMedico()
  }

  ionViewDidEnter(){
    this.getCurrentMedico()
  }

  getCurrentMedico() {
    this.medicoService.getCurrentDoctor('as').subscribe(
      res => {
        this.medico = res.data
        console.log(this.medico)
      },
      error => {
        console.log(error)
      }
    )
  }
}
