import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
 constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('token')
    })
  };

  getAllCandidatures(): Observable<any>{
    return this.httpClient.get<[]>(`${environment.candidaturesUrl}candidatures`);
  }
}
