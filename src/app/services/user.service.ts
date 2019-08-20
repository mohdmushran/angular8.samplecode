import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginSource = new BehaviorSubject(false);
  currentMessage = this.loginSource.asObservable();

  private nameSource = new BehaviorSubject(false);
  currentName = this.loginSource.asObservable();

  constructor() {
    this.checkIsLoggedIn();
  }

  changeMessage(message: boolean) {
    this.loginSource.next(message);
  }

  changeName(message: boolean) {
    this.nameSource.next(message);
  }

  checkIsLoggedIn() {
    var data = localStorage.getItem('user_token');
    data = JSON.parse(data);
    if (data != null) {
      this.loginSource.next(true);
    } else {
      this.loginSource.next(false);
    }
  }

}
