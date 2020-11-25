import { PacienteService } from './../../services/paciente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarpaciente',
  templateUrl: './registrarpaciente.page.html',
  styleUrls: ['./registrarpaciente.page.scss'],
})
export class RegistrarpacientePage {

  pacienteForm: FormGroup

  loading: boolean = false

  constructor(
    private _builder: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router
  ) { 
    this.pacienteForm = this._builder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipo_sangre: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      sexo: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      alergias: ['', Validators.required],
      foto: [''],
    })
  }

  onSubmit(values) {
    this.loading = true
    this.pacienteService.createPatient(values).subscribe(
      res => {
        this.pacienteForm.reset()
        this.loading = false
        this.router.navigate(['/showallpacientes'])
      },
      error => {
        console.log(error)
        this.loading = false
      }
    )
  }
}
