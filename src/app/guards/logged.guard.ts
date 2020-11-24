import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx'

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: NativeStorage
  ) { }

  canActivate(): boolean {
    this.storage.getItem('token').then(
      val => {
        if (!!val) {
          this.router.navigate(['/dashboard'])
          return false
        }
      },
      error => {
        if (!!localStorage.getItem('token')) {
          this.router.navigate(['/dashboard'])
          return false
        }
      }
    )

    return true;
  }
  
}
