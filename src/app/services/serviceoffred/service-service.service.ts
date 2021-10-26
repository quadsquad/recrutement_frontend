import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

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
    return this.httpClient.get<[]>(`${environment.apiUrl}services/findallServices`, this.httpOptions);
  }

  addService(service){
    return this.httpClient.post<any>(`${environment.apiUrl}services/create`,service,this.httpOptions);
  }

  updateService(id: number,  service): Observable<any>{
    return this.httpClient.put<any>(`${environment.apiUrl}`+ '/' + id , service , this.httpOptions);
  }
  servicedelete(id : number): Observable<any>{


    const url = `${environment.apiUrl}` + 'services/delete/' + `${id}`;
    console.log(url);

    return this.httpClient.delete(url);
  }
}
