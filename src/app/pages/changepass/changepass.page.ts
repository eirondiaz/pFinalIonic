import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage {

  passForm: FormGroup

  constructor(private _builder: FormBuilder) { 
    this.passForm = this._builder.group({
      clave: ['', Validators.required],
      newclave: ['', Validators.required],
      repclave: ['', Validators.required],
    })
  }

  onSubmit(values) {
    console.log(values)
    this.passForm.reset()
  }
}
