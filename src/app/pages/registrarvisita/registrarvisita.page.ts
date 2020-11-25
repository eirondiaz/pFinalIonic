import { VisitaService } from './../../services/visita.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Paciente } from './../../Models/Paciente';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../../services/paciente.service';

@Component({
  selector: 'app-registrarvisita',
  templateUrl: './registrarvisita.page.html',
  styleUrls: ['./registrarvisita.page.scss'],
})
export class RegistrarvisitaPage implements OnInit {

  consultaForm: FormGroup

  pacientList: Paciente[] = []

  loading: boolean = false 

  constructor(
    private pacienteService: PacienteService,
    private _builder: FormBuilder,
    private visitaService: VisitaService
  ) { 
    this.consultaForm = this._builder.group({
      id_paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      motivo: ['', Validators.required],
      no_seguro: ['', Validators.required],
      monto: ['', Validators.required],
      diagnostico: ['', Validators.required],
      nota: ['', Validators.required],
      foto_evidencia: [''],
    })
  }

  ngOnInit() {
    this.getAllPacientes()
  }

  getAllPacientes() {
    this.pacienteService.getAllPatients().subscribe(
      res => {
        this.pacientList = res.data
      },
      error => console.log(error)
    )
  }

  onSubmit(values) {
    this.loading = true
    this.visitaService.createVisita(values).subscribe(
      res => {
        this.loading = false
        this.consultaForm.reset()
      },
      error => {
        this.loading = false
        console.log(error)
      }
    )
  }
}
