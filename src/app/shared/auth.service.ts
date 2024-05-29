import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../types/loginPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-type', 'application/json');
  currentUser={};
  isLogged: boolean = false;

  constructor(
    private http:HttpClient,
  ) {}

  login(payload: LoginPayload) {
    console.log('login');
    return this.http.post<any>(`${this.endpoint}/login`, payload, {headers: this.headers});
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.endpoint}/users/me`, {headers: this.headers})
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  logout() {
    localStorage.clear();
    this.currentUser = {};
    this.isLogged = false;
  }
}
