import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {

  loginForm: FormGroup

  loading: boolean = false

  constructor(
    private _builder: FormBuilder, 
    private storage: NativeStorage,
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) { 
    this.loginForm = this._builder.group({
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
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
    this.loading = true
    this.authService.login(values).subscribe(
      res => {
        if(res.ok) {
          this.loginForm.reset()
          this.storage.setItem('token', res.token).then(
            () => {
              this.loading = false
              this.router.navigate(['/dashboard'])
            },
            error => {
              if(error === 'cordova_not_available') {
                localStorage.setItem('token', res.token)
                this.loading = false
                this.router.navigate(['/dashboard'])
              }
            }
          )
        }
      },
      error => {
        this.loading = false
        this.createToast(error.error.detail)
      }
    )
  }
}
