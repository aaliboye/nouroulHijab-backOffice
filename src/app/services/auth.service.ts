import { Router } from '@angular/router';
import { API_URL } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: any
  userId!: any
  isAuth$  =  new BehaviorSubject<boolean>(false);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private route: Router) {
    this.initAuth()
   }

  initAuth(){
    if(typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token')
      this.userId = localStorage.getItem('userId')

        if(this.userId && this.token){
          this.isAuth$.next(true);
      }
    }
  }

  login(telephone: String, password: String) {
    return new Promise((resolve, reject)=>{

      this.http.post<any>(`${API_URL}/users/login`, {telephone: telephone, password: password}).subscribe(
        (authData: {token: string, userId: string})=>{
          this.isAuth$.next(true)
          if(typeof localStorage !== 'undefined'){
            localStorage.setItem('token', authData.token)
            localStorage.setItem('userId', authData.userId)
          }
          resolve(true)
        },
        (err)=>{
          reject(err)
        }
      )

    })

  }



  // login(telephone: String, password: String): Observable<any> {
  //    return this.http.post<any>(`${API_URL}/users/login`, {telephone: telephone, password: password}, this.httpOptions)
  // }

  signup(user: any){
    return new Promise((resolve, reject)=>{
      this.http.post<any>(`${API_URL}/users/signup`, user).subscribe(
        (signupData: {status: "success",message: String})=>{
          if(signupData.status == "success"){
            this.route.navigateByUrl("/home")
          }
          else{
            reject(signupData.message)
          }
        },
        (err)=>{
          reject(err)
        }
      )
    })

  }
}
