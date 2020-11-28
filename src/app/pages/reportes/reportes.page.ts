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
  getZodiaco(fecha){
    let dia = Number(fecha.substring(8, 10))
    let mes = Number(fecha.substring(5, 7))

    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
      return ('Aries');
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
      return ('Libra');
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
      return ('Tauro');
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
      return ('Escorpio');
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
      return ('G\u00E9minis');
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
      return ('Sagitario');
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
      return ('C\u00E1ncer');
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
      return ('Capricornio');
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
      return ('Leo');
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
      return ('Acuario');
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
      return ('Virgo');
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
      return ('Piscis');
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
