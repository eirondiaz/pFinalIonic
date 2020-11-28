import { PacienteService } from './../../services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Visita } from 'src/app/Models/Visita';
import { VisitaService } from 'src/app/services/visita.service';
import { Paciente } from 'src/app/Models/Paciente';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  selectedFrame: string = 'fecha'
  loading: boolean = false

  //VARIABLES PARA REPORTE #1
  fechaToFilter: any
  visitaList: Visita[] = []
  visitaListFiltered: Visita[] = []

  //VARIABLES PARA REPORTE #2
  pacienteList: Paciente[] = []

  constructor(
    private visitaService: VisitaService,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllVisitas()
    this.getAllPacientes()
  }

  segmentChanged(ev: any) {
    this.selectedFrame = ev.target.value
  }

  //FUNCIONES PARA REPORTE #1
  fechaChange(ev) {
    this.visitaListFiltered = this.visitaList.filter(x => x.fecha.substring(0, 10) == this.fechaToFilter.substring(0, 10))
    console.log(this.visitaListFiltered)
  }

  getAllVisitas() {
    this.loading = true
    this.visitaService.getAllVisitas().subscribe(
      res => {
        this.loading = false
        console.log(res.data)
        this.visitaList = res.data
        console.log(this.visitaList)
      },
      error => {
        this.loading = false
        console.log(error)
      }
    )
  }

  //FUNCIONES PARA REPORTE #3
  getAllPacientes() {
    this.loading = true
    this.pacienteService.getAllPatients().subscribe(
      res => {
        this.loading = false
        this.pacienteList = res.data
      },
      error => {
        this.loading = false
        console.log(error)
      }
    )
  }
}
