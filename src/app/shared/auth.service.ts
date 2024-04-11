import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../types/loginPyaload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-type', 'application/json');
  currentUser={};

  constructor(
    private http:HttpClient,
  ) {}

  login(payload: LoginPayload) {
    return this.http
      .post<any>(`${this.endpoint}/login`, payload)
      .subscribe((res:any) => {
        localStorage.setItem('jwt', res.token);
        this.getUserProfile().subscribe(
          (response) => {
            this.currentUser = response.content;
            localStorage.setItem('userProfil', JSON.stringify(this.currentUser))
          }
        )
      })
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.endpoint}/users/me`, {headers: this.headers})
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }
}
