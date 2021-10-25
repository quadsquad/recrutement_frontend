import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
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
            let tokenStr = "Bearer " + userData.token;

            return userData;
         })
      );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("data");
    console.log(!(user == null));

    return !(user == null);
  }

  isLoggedIn(){

    return this.httpClient.get(`${environment.apiUrl}/content`);
  }



  logout(){
    sessionStorage.removeItem("data");

  }
}
