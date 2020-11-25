import { PacienteService } from './../../services/paciente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showallpacientes',
  templateUrl: './showallpacientes.page.html',
  styleUrls: ['./showallpacientes.page.scss'],
})
export class ShowallpacientesPage implements OnInit {

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.getAllPacientes()
  }

  getAllPacientes() {
    this.pacienteService.getAllPatients().subscribe(
      res => console.log(res.data),
      error => console.log(error)
    )
  }
}
