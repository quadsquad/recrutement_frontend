import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user;
  constructor(private httpClient: HttpClient) { }

  register(userData) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8084/subscribe",userData);
  }

}
