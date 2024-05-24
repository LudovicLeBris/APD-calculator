import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterPayload } from '../types/registerPayload';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-type', 'application/json');

  constructor(
    private http: HttpClient
  ) {}

  register(payload: RegisterPayload) {
    console.log('register');
    return this.http.post<any>(`${this.endpoint}/register`, payload, {headers: this.headers});
  }
}
