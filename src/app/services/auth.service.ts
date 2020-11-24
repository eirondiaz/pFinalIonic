import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NativeStorage } from '@ionic-native/native-storage/ngx'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL:string = 'https://ube4kp.deta.dev/authentication'

  constructor(
    private http: HttpClient,
    private storage: NativeStorage
  ) { }

  registrar(data) {
    return this.http.post<any>(this.URL + '/register', data)
  }

  login(data) {
    return this.http.post<any>(this.URL + '/login', data)
  }

  logOut() {
    this.storage.remove('token').then(
      () => console.log('token eliminado'),
      error => localStorage.removeItem('token') 
    )
  }
}
