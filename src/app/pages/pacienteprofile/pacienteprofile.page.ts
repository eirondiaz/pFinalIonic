import { AlertController } from '@ionic/angular';
import { PacienteService } from './../../services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/Models/Paciente';

@Component({
  selector: 'app-pacienteprofile',
  templateUrl: './pacienteprofile.page.html',
  styleUrls: ['./pacienteprofile.page.scss'],
})
export class PacienteprofilePage implements OnInit {

  idPac: any

  paciente: Paciente = {}

  editar: boolean = false
  loading: boolean = false

  constructor(
    private _ac: ActivatedRoute,
    private pacienteService: PacienteService,
    private alertCtrl: AlertController,
    private router: Router
  ) { 
    this._ac.paramMap.subscribe(param => {
      this.idPac = param.get('id')
    })
  }

  ngOnInit() {
    this.getPacienteById()
  }

  getPacienteById() {
    this.loading = true
    this.pacienteService.getPatientById(this.idPac).subscribe(
      res => {
        if (res.ok) {
          this.loading = false
          this.paciente = res.data
        }
        this.loading = false
      },
      error => {
        this.loading = false
        console.log(error)
      }
    )
  }

  async deletepaciente() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar Paciente',
      message: 'Deseas eliminar este paciente?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.loading = true
          this.pacienteService.deletePatient(this.idPac).subscribe(
            res => {
              if (res.ok) {
                this.loading = false
                this.router.navigate(['/showallpacientes'])
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

  async alertForEdit() {
    const alert = await this.alertCtrl.create({
      header: 'Editar Paciente',
      message: 'Deseas editar este paciente?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.loading = true
          this.pacienteService.updatePatient(this.paciente.id, this.paciente).subscribe(
            res => {
              if (res.ok) {
                this.loading = false
                this.editar = false
                console.log(res)
              }
              this.loading = false
            },
            error => {
              this.loading = false
              this.editar = false
              this.alertForEdit()
              console.log(error)
            }
          )
        }
      }]
    })
    await alert.present()
  }

  editarPac() {
    if (this.editar) {
      this.alertForEdit()
    }
    else {
      this.editar = true
    }
  }

  cancelarEdit() {
    this.editar = false
    this.getPacienteById()
  }
}
