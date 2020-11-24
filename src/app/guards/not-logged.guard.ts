import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: NativeStorage
  ) { }

  canActivate(): boolean{
    this.storage.getItem('token').then(
      val => {
        if (!!val) {
          return true
        }
      },
      error => {
        if (!!localStorage.getItem('token')) {
          return true
        }
      }
    )

    this.router.navigate(['/signin'])
    return false
  }
  
}
