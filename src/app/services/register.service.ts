// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders } from '@angular/common/http';
// @ts-ignore
import { Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private httpClient: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  register(userData) : Observable<any>{
    return this.httpClient.post<any>('subscribe',userData, this.httpOptions);
  }

}
