import { Camera } from '@ionic-native/camera/ngx';
import { PacienteService } from './../../services/paciente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarpaciente',
  templateUrl: './registrarpaciente.page.html',
  styleUrls: ['./registrarpaciente.page.scss'],
})
export class RegistrarpacientePage {

  pacienteForm: FormGroup

  loading: boolean = false

  image: string = ''

  constructor(
    private _builder: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router,
    private camera: Camera,
    private alertCtrl: AlertController
  ) { 
    this.pacienteForm = this._builder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipo_sangre: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      sexo: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      alergias: ['', Validators.required]
    })
  }

  async createAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Seleccionar foto',
      message: 'Selecciona de donde quieres elegir la foto',
      buttons: [{
        text: 'Camara',
        handler: () => {
          this.getCamera()
        }
      }, {
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Galería',
        handler: () => {
          this.getPhotoLibrary()
        } 
      }]
    })
    await alert.present()
  }

  onSubmit(values) {
    this.loading = true
    this.pacienteService.createPatient({...values, foto: this.image}).subscribe(
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

  getPhotoLibrary() {
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

  getCamera() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
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
