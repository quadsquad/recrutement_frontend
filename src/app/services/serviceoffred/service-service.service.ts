// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {

  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllServices(): Observable<any>{
    return this.httpClient.get<[]>(`http://localhost:8084/services/findallServices`, this.httpOptions);
  }

  addService(service){
    return this.httpClient.post<any>(`http://localhost:8084/services/create`,service,this.httpOptions);
  }

  updateService(id: number,  service): Observable<any>{
    return this.httpClient.put<any>(`http://localhost:8084`+ '/' + id , service , this.httpOptions);
  }
  servicedelete(id : number): Observable<any>{
    const url = `http://localhost:8084/` + 'services/delete/' + `${id}`;
    console.log(url);

    return this.httpClient.delete(url);
  }
}
