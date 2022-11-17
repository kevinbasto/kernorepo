import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  async logIn({user, password} : { user: string, password:  string} ){
    return new Promise<any>((resolve, reject) => {
      lastValueFrom(
        this.http.post(`${environment.defaultAuthProvider}/getSessionToken`, {
          email : user,
          password,
          idunique : environment.idunique,
          idfirebase : environment.idfirebase
        })
      )
      .then((result : any) => {
        resolve(result);
        this.router.navigate(['/inicio'], {queryParams : {
          name : result.name
        }})
      })
      .catch(err => {
        console.log(err)
        reject(err);
      })
    })
  }
}
