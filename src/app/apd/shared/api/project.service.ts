import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from '../../../types/user';
import { environment } from '../../../../environments/environment';
import { JsonProject, Project, StateProject } from '../models/project.model';
import { Observable, catchError, of, tap } from 'rxjs';
import { DuctNetwork, JsonDuctNetwork } from '../models/duct-network.model';
import { DuctNetworkService } from './duct-network.service';
import { Errormessage } from '../../../types/error-message';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  userProfile: AppUser;
  url: string = environment.apiUrl;

  constructor(
    private http:HttpClient,
    private ductNetworkService: DuctNetworkService,
  ) {
    this.userProfile = JSON.parse(localStorage.getItem('userProfil')!)
  }

  getProjects(): Observable<{message: string, content: JsonProject[] | Errormessage[]}> {
    return this.http.get<{message: string, content: JsonProject[]}>(`${this.url}/apd/users/${this.userProfile.id}/projects`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  getProjectById(projectId: number): Observable<{message: string, content:JsonProject | Errormessage[]}> {
    return this.http.get<{message: string, content:JsonProject}>(`${this.url}/apd/users/${this.userProfile.id}/projects/${projectId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  addProject(project: Project | JsonProject): Observable<{message: string, content:JsonProject | Errormessage[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    if (project instanceof(Project)) {
      project = this.projectToJson(project)
    }
    return this.http.post<{message: string, content:JsonProject}>(`${this.url}/apd/users/${this.userProfile.id}/projects`, project, httpOptions).pipe(
      tap((response) => console.log(response),
      catchError((error) => this.handleError(error, error.error))
      )
    );
  }

  updateProject(project: Project | JsonProject): Observable<{message: string, content:JsonProject | Errormessage[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    if (project instanceof(Project)) {
      project = this.projectToJson(project)
    }
    return this.http.patch<{message: string, content:JsonProject}>(`${this.url}/apd/users/${this.userProfile.id}/projects/${project.id}`, project, httpOptions).pipe(
      tap((response) => console.log(response),
      catchError((error) => this.handleError(error, error.error))
      )
    );
  }

  deleteProject(project: Project | JsonProject): Observable<{message: string, content:JsonProject | Errormessage[]}> {
    return this.http.delete<{message: string, content:JsonProject}>(`${this.url}/apd/users/${this.userProfile.id}/projects/${project.id}`).pipe(
      tap((response) => console.log(response),
      catchError((error) => this.handleError(error, error.error))
      )
    );
  }

  private handleError(error: Error, errorValue:{message:string, content:{field:string, message:string}[]}) {
    console.log(error);
    return of(errorValue);
  }

  projectToJson(project: Project): JsonProject {
    const jsonDuctNetworks: JsonDuctNetwork[] = [];

    project.ductNetworks.forEach(ductNetwork => {
      const jsonDuctNetwork = this.ductNetworkService.ductNetworkToJson(ductNetwork);
      jsonDuctNetworks.push(jsonDuctNetwork);
    });

    const jsonProject: JsonProject = {
      id: project.id,
      name: project.name,
      userId: project.userId,
      generalAltitude: project.generalAltitude.getValue() as number,
      generalTemperature: project.generalTemperature.getValue() as number,
      ductNetworks: jsonDuctNetworks
    }

    return jsonProject;
  }

  JsonToProject(jsonProject: JsonProject): Project {
    const ductNetworks: DuctNetwork[] = [];

    jsonProject.ductNetworks.forEach(jsonDuctNetwork => {
      const ductNetwork = this.ductNetworkService.jsonToDuctNetwork(jsonDuctNetwork);
      ductNetworks.push(ductNetwork);
    });

    const project = new Project;
    project.id = jsonProject.id;
    project.name = jsonProject.name;
    project.userId = jsonProject.userId;
    project.generalAltitude.setValue(jsonProject.generalAltitude);
    project.generalTemperature.setValue(jsonProject.generalTemperature);
    project.ductNetworks = ductNetworks;

    return project;
  }

  stateToProject(stateProject: StateProject): Project {
    const ductNetworks: DuctNetwork[] = [];

    stateProject.ductNetworks.forEach(stateDuctNetwork => {
      const ductNetwork = this.ductNetworkService.stateToDuctNetwork(stateDuctNetwork);
      ductNetworks.push(ductNetwork);
    });

    const project = new Project;
    project.id = stateProject.id;
    project.name = stateProject.name;
    project.userId = stateProject.userId;
    project.generalAltitude.setValue(stateProject.generalAltitude.value);
    project.generalTemperature.setValue(stateProject.generalTemperature.value);
    project.ductNetworks = ductNetworks;

    return project;
  }

}
