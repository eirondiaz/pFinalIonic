import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  URL:string = 'https://n7pec0.deta.dev/consulta'

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

  createVisita(data) {
    return this.http.post<any>(this.URL + '/create?token=' + this.TOKEN, data)
  }

  getAllVisitas() {
    return this.http.get<any>(this.URL + '/?token=' + this.TOKEN)
  }

  getVisitaById(id) {
    return this.http.get<any>(this.URL + '/' + id + '?token=' + this.TOKEN)
  }

  updateVisita(id, data) {
    return this.http.get<any>(this.URL + '/' + id, data)
  }

  deleteVisita(id) {
    return this.http.delete<any>(this.URL + '/' + id + '?token=' + this.TOKEN)
  }
}
