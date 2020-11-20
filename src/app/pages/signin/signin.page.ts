import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {

  loginForm: FormGroup

  constructor(private _builder: FormBuilder) { 
    this.loginForm = this._builder.group({
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    })
  }

  onSubmit(values) {
    console.log(values)
    this.loginForm.reset()
  }
}
