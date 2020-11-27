import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { MedicoService } from './../../services/medico.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Medico } from 'src/app/models/Medico';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.page.html',
  styleUrls: ['./updatedata.page.scss'],
})
export class UpdatedataPage implements OnInit {

  medico: Medico = {}
  currentCorreo: string = ''

  loading: boolean = false

  constructor(
    private _buider: FormBuilder,
    private medicoService: MedicoService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private storage: NativeStorage
  ) { }

  ngOnInit() {
    this.getCurrentMedico()
  }

  async createToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000
    })
    await toast.present()
  }

  async onSubmit() {
    const alert = await this.alertCtrl.create({
      header: 'Modificar los Datos',
      message: 'Estás seguro que deseas modifical los datos?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.loading = true
          let data = { }
          if (this.medico.correo === this.currentCorreo) {
            data = {
              nombre: this.medico.nombre
            }
          } else {
            data = {
              nombre: this.medico.nombre,
              correo: this.medico.correo
            }
          }
          this.medicoService.updateEmailName(data).subscribe(
            res => {
              this.loading = false
              console.log(res)
              /*this.storage.setItem('token', res.token).then(
                () => console.log('token saved cordova'),
                error => localStorage.setItem('token', res.token)
              )*/
              this.createToast('Datos modificados correctamente')
            },
            error => {
              if (error.error.detail === 'user already registered') {
                this.loading = false
                this.createToast('Ese correo ya está en uso')
              }
              console.log(error)
            }
          )
        }
      }]
    })
    await alert.present()
  }

  getCurrentMedico() {
    this.medicoService.getCurrentDoctor('as').subscribe(
      res => {
        this.medico = res.data
        this.currentCorreo = res.data.correo
      },
      error => {
        console.log(error)
      }
    )
  }
}
