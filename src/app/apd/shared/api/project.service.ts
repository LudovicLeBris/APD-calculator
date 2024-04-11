import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from '../../../types/user';
import { environment } from '../../../../environments/environment';
import { PayloadProject, Project } from '../models/project.model';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  userProfile: AppUser;
  url: string = environment.apiUrl;

  constructor(
    private http:HttpClient,
  ) {
    this.userProfile = JSON.parse(localStorage.getItem('userProfil')!)
  }

  getProjects(): Observable<{message: string, content: Project[] | {field:string, message:string}[]}> {
    return this.http.get<{message: string, content: Project[]}>(`${this.url}/apd/users/${this.userProfile.id}/projects`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  getProjectById(projectId: number): Observable<{message: string, content:Project | {field:string, message:string}[]}> {
    return this.http.get<{message: string, content:Project}>(`${this.url}/apd/users/${this.userProfile.id}/projects/${projectId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  addProject(project: Project): Observable<{message: string, content:Project | {field:string, message:string}[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<{message: string, content:Project}>(`${this.url}/apd/users/${this.userProfile.id}/projects`, project, httpOptions).pipe(
      tap((response) => console.log(response),
      catchError((error) => this.handleError(error, error.error))
      )
    );
  }

  updateProject(project: Partial<PayloadProject>, projectId: number): Observable<{message: string, content:Project | {field:string, message:string}[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    console.log(project);

    return this.http.patch<{message: string, content:Project}>(`${this.url}/apd/users/${this.userProfile.id}/projects/${projectId}`, project, httpOptions).pipe(
      tap((response) => console.log(response),
      catchError((error) => this.handleError(error, error.error))
      )
    );
  }

  deleteProject(project: Project): Observable<{message: string, content:Project | {field:string, message:string}[]}> {
    return this.http.delete<{message: string, content:Project}>(`${this.url}/apd/users/${this.userProfile.id}/projects/${project.id}`).pipe(
      tap((response) => console.log(response),
      catchError((error) => this.handleError(error, error.error))
      )
    );
  }

  private handleError(error: Error, errorValue:{message:string, content:{field:string, message:string}[]}) {
    console.log(error);
    return of(errorValue);
  }
}
