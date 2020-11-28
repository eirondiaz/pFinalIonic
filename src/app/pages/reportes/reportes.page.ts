import { Component, OnInit } from '@angular/core';
import { Visita } from 'src/app/Models/Visita';
import { VisitaService } from 'src/app/services/visita.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  selectedFrame: string = 'fecha'
  loading: boolean = false

  fechaToFilter: any

  visitaList: Visita[] = []
  visitaListFiltered: Visita[] = []

  constructor(
    private visitaService: VisitaService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllVisitas()
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value)
    this.selectedFrame = ev.target.value
  }

  fechaChange(ev) {
    console.log('facha cambiada', this.fechaToFilter.substring(0, 10))
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
}
