import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  registroForm: FormGroup

  constructor(
    private _builder: FormBuilder,
    private storage: NativeStorage
  ) { 
    this.registroForm = this._builder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required],
      repclave: ['', Validators.required]
    })
  }

  onSubmit(values) {
    console.log(values)
    this.registroForm.reset()
    
    this.storage.getItem('token').then(
      data => {
      console.log(data)
    });
  }
}
