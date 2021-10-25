import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token')
    })
  };

  getAllJobs(): Observable<any>{
    return this.httpClient.get<[]>(`${environment.apiUrl}findAllEmplois`, this.httpOptions);
  }
}
