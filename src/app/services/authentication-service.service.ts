// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


  constructor(private httpClient: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('token')
    })
  };
  authenticate(username,password){
    return this.httpClient
      .post<any>('auth',{username,password},this.httpOptions)
      .pipe(
         map(userData => {
            sessionStorage.setItem('data',JSON.stringify(userData));
            sessionStorage.setItem('token', JSON.stringify(userData.response));
            return userData;
         })
      );
  }
  isUserLoggedIn(){

   return this.httpClient.get(`getuserconnected`, this.httpOptionsAuth).
       pipe(
     map(user=>{
      sessionStorage.setItem('authUser', JSON.stringify(user));
      return user;
    })
    );
  }




  logout(){
    sessionStorage.removeItem('data');

  }
}
