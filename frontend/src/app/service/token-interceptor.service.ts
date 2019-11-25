import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next){
    const tokenReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer ' + 'token1234'
      }
    })
    return next.handle(tokenReq)
  }
}
