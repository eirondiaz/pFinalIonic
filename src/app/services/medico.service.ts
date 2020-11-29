import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  URL:string = 'https://n7pec0.deta.dev/doctor'

  TOKEN: string = ''

  constructor(
    private http: HttpClient,
    private storage: NativeStorage
  ) { 
    this.TOKEN = ''
    this.storage.getItem('token').then(
      data => this.TOKEN = data,
      error => this.TOKEN = localStorage.getItem('token')
    )
  }

  updatePassword(data) {
    return this.http.put<any>(this.URL + '/updatePassword?token=' + this.TOKEN, data)
  }

  updateEmailName(data) {
    return this.http.put<any>(this.URL + '/updateEmailName?token=' + this.TOKEN, data)
  }

  getCurrentDoctor(u) {
    return this.http.get<any>(this.URL + '/getCurrentDoctor?token=' + this.TOKEN)
  }
}
