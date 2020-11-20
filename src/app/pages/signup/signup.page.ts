import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  registroForm: FormGroup

  constructor(private _builder: FormBuilder) { 
    this.registroForm = this._builder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required],
    })
  }

  onSubmit(values) {
    console.log(values)
    this.registroForm.reset()
  }
}
