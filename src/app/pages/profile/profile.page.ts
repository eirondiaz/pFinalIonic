import { Medico } from './../../models/Medico';
import { MedicoService } from './../../services/medico.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  medico: Medico = {}

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private medicoService: MedicoService
  ) { }

  ngOnInit() {
    this.getCurrentMedico()
  }

  ionViewDidEnter(){
    this.getCurrentMedico()
  }

  async logOut() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar Sesión',
      message: 'Estas seguro que deseas cerrar sesión?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.router.navigate(['/signin'])
          this.authService.logOut()
        }
      }]
    })
    await alert.present()
  }

  getCurrentMedico() {
    this.medicoService.getCurrentDoctor('as').subscribe(
      res => {
        this.medico = res.data
      },
      error => {
        console.log(error)
      }
    )
  }
}
