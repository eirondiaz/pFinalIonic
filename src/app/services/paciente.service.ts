import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL:string = 'https://ube4kp.deta.dev/patient'

  TOKEN: string

  constructor(
    private http: HttpClient,
    private storage: NativeStorage
  ) { 
    this.storage.getItem('token').then(
      data => this.TOKEN = data,
      error => this.TOKEN = localStorage.getItem('token')
    )
  }

  createPatient(data) {
    return this.http.post<any>(this.URL + '/create?token=' + this.TOKEN, data)
  }

  getAllPatients() {
    return this.http.get<any>(this.URL + '/patients?token=' + this.TOKEN)
  }

  getPatientById(id) {
    return this.http.get<any>(this.URL + '/' + id)
  }

  updatePatient(id, data) {
    return this.http.put<any>(this.URL + '/' + id, data)
  }

  deletePatient(id) {
    return this.http.delete<any>(this.URL + '/' + id)
  }
}
