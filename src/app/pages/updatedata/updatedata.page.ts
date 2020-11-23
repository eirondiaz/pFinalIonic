import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.page.html',
  styleUrls: ['./updatedata.page.scss'],
})
export class UpdatedataPage implements OnInit {

  dataForm: FormGroup

  constructor(private _buider: FormBuilder) { 
    this.dataForm = this._buider.group({
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      nombre: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(values) {
    console.log(values)
    this.dataForm.reset()
  }
}
