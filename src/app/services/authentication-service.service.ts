import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username,password){
    return this.httpClient
      .post<any>("http://localhost:8084/auth",{username,password})
      .pipe(
         map(userData => {
            sessionStorage.setItem("username",username);
            let tokenStr = "Bearer" + userData.token;
            return userData;
         })
      );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("username");
    console.log(!(user == null));
    return !(user == null);
  }

  logout(){
    sessionStorage.removeItem("username");
  }
}
