import { Injectable } from '@angular/core';
import { HttpInterceptor , HttpRequest , HttpHandler} from "@angular/common/http";
//import { AuthenticationService } from './authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
     if(sessionStorage.getItem('data') && sessionStorage.getItem('response')){
       req = req.clone({
         setHeaders: {
            Authorization : sessionStorage.getItem('response')
         }
       })
     }
     return next.handle(req);
  }
}
