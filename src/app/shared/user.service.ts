import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUser } from '../types/user';
import { LostPasswordPayload } from '../types/lostPasswordPayload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-type', 'application/json');
  currentUser: AppUser | null;

  constructor(
    private http: HttpClient,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('userProfil')!);
  }

  lostPassword(payload: LostPasswordPayload) {
    console.log('lost password');
    return this.http.post<any>(`${this.endpoint}/lostpassword`, payload, {headers: this.headers});
  }

  recoverpassword(guid: string, newPassword: {newPassword: string}) {
    console.log('recover password');
    return this.http.patch<any>(`${this.endpoint}/recoverpassword/${guid}`, newPassword, {headers: this.headers});
  }

  updateUser(payload: Partial<AppUser>) {
    return this.http.patch<any>(`${this.endpoint}/users/${this.currentUser?.id}`, payload, {headers: this.headers});
  }
}
