import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  constructor(private httpClient: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    })
  };
  httpStoreOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/vnd.uploadcare-v0.5+json',
      Authorization: 'Uploadcare.Simple 3226601193ad7484e850:e0e699ab65c7026f0c47'
    })
  }

  getAllCandidatures(): Observable<any> {
    return this.httpClient.get<[]>(`${environment.candidaturesUrl}candidatures`);
  }

  applyCandidate(application,id) {
    return this.httpClient.post<any>(`${environment.candidaturesUrl}postuler/` + id, application, this.httpOptions);
  }

  storeFile(uuid): Observable<any> {
    return this.httpClient.put<any>('https://api.uploadcare.com/files/' + uuid + '/storage/', null, this.httpStoreOption);
  }

  deleteFile(uuid): Observable<any> {
    return this.httpClient.delete<any>('https://api.uploadcare.com/files/' + uuid + '/', this.httpStoreOption);
  }
}
