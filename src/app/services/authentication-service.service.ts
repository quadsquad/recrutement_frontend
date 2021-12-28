// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


  constructor(private httpClient: HttpClient, private toastr: ToastrService) {

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
  authenticate(email,password): Observable<any>{
    return this.httpClient.post<any>('https://authrecruitement.herokuapp.com/auth',{email,password},this.httpOptions)
      .pipe(
         map(userData => {
             localStorage.setItem('data',JSON.stringify(userData.user));
            localStorage.setItem('token', JSON.stringify(userData.response));
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
