import { VisitaService } from './../../services/visita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Visita } from 'src/app/Models/Visita';
import { Paciente } from 'src/app/Models/Paciente';

@Component({
  selector: 'app-showconsulta',
  templateUrl: './showconsulta.page.html',
  styleUrls: ['./showconsulta.page.scss'],
})
export class ShowconsultaPage implements OnInit {

  idPac: any

  visita: Visita = {}
  paciente: Paciente = {}

  loading: boolean = false

  constructor(
    private alertCtrl: AlertController,
    private _ac: ActivatedRoute,
    private visitaService: VisitaService,
    private router: Router
  ) { 
    this._ac.paramMap.subscribe(param => {
      this.idPac = param.get('id')
    })
  }

  ngOnInit() {
    this.getVisitaById()
  }

  getVisitaById() {
    this.visitaService.getVisitaById(this.idPac).subscribe(
      res => {
        this.visita = res.data[0]
        this.paciente = res.data[0].paciente
        console.log(this.visita)
      },
      error => {
        console.log(error)
      }
    )
  }

  async deleteVisita() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar Visita',
      message: 'Deseas eliminar esta visita?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.loading = true
          this.visitaService.deleteVisita(this.idPac).subscribe(
            res => {
              if (res.ok) {
                this.loading = false
                this.router.navigate(['/showallvisitas'])
                console.log(res)
              }
              this.loading = false
            },
            error => {
              this.loading = false
              console.log(error)
            }
          )
        }
      }]
    })
    await alert.present()
  }
}
