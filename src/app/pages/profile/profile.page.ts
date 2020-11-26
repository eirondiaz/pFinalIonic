import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

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
}
