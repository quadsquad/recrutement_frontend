// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpInterceptor , HttpRequest , HttpHandler} from '@angular/common/http';
// import { AuthenticationService } from './authentication-service.service';
// @ts-ignore
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
