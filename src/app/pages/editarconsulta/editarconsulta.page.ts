import { PacienteService } from './../../services/paciente.service';
import { VisitaService } from 'src/app/services/visita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Models/Paciente';
import { Camera } from '@ionic-native/camera/ngx'
import { Visita } from 'src/app/Models/Visita';

@Component({
  selector: 'app-editarconsulta',
  templateUrl: './editarconsulta.page.html',
  styleUrls: ['./editarconsulta.page.scss'],
})
export class EditarconsultaPage implements OnInit {

  idPac: any

  loading: boolean = false
  image: string = ''
  visita: Visita = {}

  constructor(
    private alertCtrl: AlertController,
    private _ac: ActivatedRoute,
    private visitaService: VisitaService,
    private router: Router,
    private camera: Camera,
  ) { 
    this._ac.paramMap.subscribe(param => {
      this.idPac = param.get('id')
    })
  }

  ngOnInit() {
    this.getVisitaById()
  }

  async createAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Editar visita',
      message: 'Estas seguro que deseas editar la visita?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.loading = true
          this.visitaService.updateVisita(this.visita.id, this.visita).subscribe(
            res => {
              this.loading = false
              this.router.navigate(['/showallvisitas'])
            },
            error => {
              this.loading = false
              console.log(error)
            }
          )
        }
      }]
    })
    await alert.present()
  }

  getVisitaById() {
    this.loading = true
    this.visitaService.getVisitaById(this.idPac).subscribe(
      res => {
        this.loading = false
        this.visita = res.data[0]
        this.image = res.data[0].foto_evidencia
        console.log(res)
      },
      error => {
        this.loading = false
        console.log(error)
      }
    )
  }

  onSubmit() {
    this.createAlert()
    //console.log(this.visita[0])
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
