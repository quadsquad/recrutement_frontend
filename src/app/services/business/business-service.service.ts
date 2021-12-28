import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  constructor(private httpClient: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  httpStoreOption = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/vnd.uploadcare-v0.5+json',
      Authorization: 'Uploadcare.Simple 3226601193ad7484e850:e0e699ab65c7026f0c47'
    })
  }

  updateBusiness(businessData, idBusiness): Observable<any>{
    return this.httpClient.put<any>(`${environment.authUrl}/update-business-profile/${idBusiness}`, businessData, this.httpOptions);
  }

  updateBusinessLogo(businessData, idBusiness): Observable<any>{
    return this.httpClient.put<any>(`${environment.authUrl}/update-business-logo/${idBusiness}`, businessData, this.httpOptions)
  }

  validateEmail(email): Observable<any>{
    return this.httpClient.get<any>(`${environment.nodeUrl}/verify-email?email=`+email, this.httpOptions);
  }

  validatePhone(phone): Observable<any>{
    return this.httpClient.get<any>(`${environment.phoneUrl}/v1/?api_key=${environment.apiKeyPhone}&phone=`+phone, this.httpOptions);
  }

  getAllUsers(): Observable<any>{
    return this.httpClient.get<any>(`${environment.authUrl}/findallusers`, this.httpOptions);
  }

  storeFile(uuid): Observable<any>{
    return this.httpClient.put<any>('https://api.uploadcare.com/files/'+uuid+'/storage/', null, this.httpStoreOption);
  }

  deleteFile(uuid): Observable<any>{
    return this.httpClient.delete<any>('https://api.uploadcare.com/files/'+uuid+'/', this.httpStoreOption);
  }
}
