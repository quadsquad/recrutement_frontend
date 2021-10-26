import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";
import {environment} from "../../environments/environment";


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
  authenticate(username,password){
    return this.httpClient
      .post<any>(`${environment.apiUrl}auth`,{username,password},this.httpOptions)
      .pipe(
         map(userData => {
            sessionStorage.setItem("data",JSON.stringify(userData));
            sessionStorage.setItem("token", JSON.stringify(userData.response));
            return userData;
         })
      );
  }
  httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token')
    })
  };
  isUserLoggedIn(){

   return this.httpClient.get(`${environment.apiUrl}getuserconnected`, this.httpOptionsAuth).
       pipe(
     map(user=>{
      sessionStorage.setItem("authUser", JSON.stringify(user));
      return user;
    })
    );
  }




  logout(){
    sessionStorage.removeItem("data");

  }
}
