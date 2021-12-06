// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
// @ts-ignore
import {Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('token')
    })
  };

  getAllJobs(): Observable<any>{
    return this.httpClient.get<[]>(`${environment.jobUrlapi}/findAllEmplois`);
  }
}
