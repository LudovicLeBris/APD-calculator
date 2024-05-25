import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../types/loginPayload';
import { LostPasswordPayload } from '../types/lostPasswordPayload';

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
    localStorage.removeItem('userProfil');
    this.currentUser = {};
    this.isLogged = false;
    localStorage.removeItem('jwt');
  }

  lostPassword(payload: LostPasswordPayload) {
    console.log('lost password');
    return this.http.post<any>(`${this.endpoint}/lostpassword`, payload, {headers: this.headers});
  }

  recoverpassword(guid: string, newPassword: {newPassword: string}) {
    console.log('recover password');
    return this.http.patch<any>(`${this.endpoint}/recoverpassword/${guid}`, newPassword, {headers: this.headers});
  }
}
