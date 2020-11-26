import { PacienteService } from './../../services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Models/Paciente';

@Component({
  selector: 'app-showallpacientes',
  templateUrl: './showallpacientes.page.html',
  styleUrls: ['./showallpacientes.page.scss'],
})
export class ShowallpacientesPage implements OnInit {

  patientsList: Paciente[] = []

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.getAllPacientes()
  }

  getAllPacientes() {
    this.pacienteService.getAllPatients().subscribe(
      res => {
        this.patientsList = res.data
        this.patientsList.reverse()
      },
      error => console.log(error)
    )
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
