import { AuthService } from './../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  registroForm: FormGroup

  constructor(
    private _builder: FormBuilder,
    private storage: NativeStorage,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router
  ) { 
    this.registroForm = this._builder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required],
      repclave: ['', Validators.required]
    })
  }

  async createToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000
    })
    await toast.present()
  }

  onSubmit(values) {
    if (values.clave !== values.repclave) {
      this.createToast('Las contraseñas no coinciden')
    }
    else {
      this.authService.registrar(values).subscribe(
        res => {
          if (res.ok) {
            this.registroForm.reset()

            this.storage.setItem('token', res.token).then(
              () => this.router.navigate(['/dashboard']),
              error => {
                localStorage.setItem('token', res.token)
                this.router.navigate(['/dashboard'])
              }
            )
          }
          else {
            this.createToast('Ha ocurrido un error')
          }
        },
        error => {
          console.log(error)
          this.createToast('Ha ocurrido un error')
        }
      )
    }
  }
}
