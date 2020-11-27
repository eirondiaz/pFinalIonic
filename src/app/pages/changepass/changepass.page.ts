import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MedicoService } from './../../services/medico.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage {

  passForm: FormGroup

  loading: boolean = false

  constructor(
    private _builder: FormBuilder,
    private medicoService: MedicoService,
    private toastCtrl: ToastController,
    private router: Router
  ) { 
    this.passForm = this._builder.group({
      clave: ['', Validators.required],
      nueva_clave: ['', Validators.required],
      repclave: ['', Validators.required],
    })
  }

  async createToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000
    })
    await toast.present()
  }

  onSubmit(values) {
    this.loading = true
    if (values.nueva_clave === values.repclave) {
      this.medicoService.updatePassword(values).subscribe(
        res => {
          this.loading = false
          this.passForm.reset()
          this.router.navigate(['/profile'])
        },
        error => {
          if (error.error.detail == 'incorrect password') {
            this.createToast('Contraseña actual incorrecta')
          }
          this.loading = false
          console.log(error)
        }
      )
    }
    else {
      this.loading = false
      this.createToast('Las contraseñas no coinciden')
    }
  }
}
