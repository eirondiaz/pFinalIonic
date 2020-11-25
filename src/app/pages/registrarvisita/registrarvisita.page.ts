import { VisitaService } from './../../services/visita.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Paciente } from './../../Models/Paciente';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../../services/paciente.service';
import { Camera } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-registrarvisita',
  templateUrl: './registrarvisita.page.html',
  styleUrls: ['./registrarvisita.page.scss'],
})
export class RegistrarvisitaPage implements OnInit {

  consultaForm: FormGroup

  pacientList: Paciente[] = []

  loading: boolean = false 

  image: string = ''

  constructor(
    private pacienteService: PacienteService,
    private _builder: FormBuilder,
    private visitaService: VisitaService,
    private camera: Camera
  ) { 
    this.consultaForm = this._builder.group({
      id_paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      motivo: ['', Validators.required],
      no_seguro: ['', Validators.required],
      monto: ['', Validators.required],
      diagnostico: ['', Validators.required],
      nota: ['', Validators.required]
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
    console.log({...values, foto_evidencia: this.image})
    this.loading = true
    this.visitaService.createVisita({...values, foto_evidencia: this.image}).subscribe(
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

  getPhoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    })
      .then(
        res => this.image = 'data:image/jpeg;base64,' + res
      )
      .catch(
        error => console.log(error)
      )
  }
}
