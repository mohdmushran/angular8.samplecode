import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../.././../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: any;
  newHeaders: any;
  api_endpoint: string = environment.api_endpoint;
  laravel_api_endpoint: string = environment.laravel_api_endpoint;

  constructor(private http: HttpClient) {
    // let helperUser = JSON.parse(localStorage.getItem('helper_user'));
    this.headers = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + helperUser.user.token
    }
    this.newHeaders = {
      'Accept': 'application/json'
    }
  }

  userRegistration(data): Observable<any> {
    // let url = this.laravel_api_endpoint + 'user-registration';
    let url = this.api_endpoint + 'users/user-registration';
    return this.http.post(url, data, { headers: this.headers })
      .pipe(catchError((error, caught) => {
        return of(error);
      }) as any);
  }

  userLogin(Data): Observable<any> {
    // let url = this.laravel_api_endpoint + 'user-login';
    let url = this.api_endpoint + 'users/user-login';
    return this.http.post(url,Data, { headers: this.headers })
      .pipe(catchError((error, caught) => {
        return of(error);
      }) as any);
  }

  userMobileDetails(data): Observable<any> {
    // let url = this.laravel_api_endpoint + 'user-mobile-details';
    let url = this.api_endpoint + 'phones/user-mobile-details'
    return this.http.post(url, data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  phoneListing(page): Observable<any> {
    // let url = this.laravel_api_endpoint + 'phone-listing';
    let url = this.api_endpoint + 'phones/phone-listing';
    return this.http.post(url, { page:page }, { headers:this.headers})
    .pipe(catchError((error,caught) => {
      return of(error);
    }) as any);
  }

}
