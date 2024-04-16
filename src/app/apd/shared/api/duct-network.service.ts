import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project.model';
import { DuctNetwork, JsonDuctNetwork } from '../models/duct-network.model';
import { Air, JsonAir } from '../models/air.model';
import { DuctSection, JsonDuctSection } from '../models/duct-section.model';
import { DuctSectionService } from './duct-section.service';
import { materials } from '../../../types/materials';

@Injectable({
  providedIn: 'root'
})
export class DuctNetworkService {

  project: Project = new Project;
  url: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private ductSectionService: DuctSectionService,
  ) {}

  getDuctNetworks(): Observable<{message: string, content:JsonDuctNetwork[] | {field:string, message:string}[]}> {
    return this.http.get<{message: string, content:JsonDuctNetwork[]}>(`${this.url}/apd/projects/${this.project.id}/ductnetworks`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  getDuctNetworkById(ductNetworkId: number): Observable<{message: string, content:JsonDuctNetwork | {field:string, message:string}[]}> {
    return this.http.get<{message: string, content:JsonDuctNetwork}>(`${this.url}/apd/projects/${this.project.id}/ductnetworks/${ductNetworkId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  addDuctNetwork(ductNetwork: DuctNetwork | JsonDuctNetwork): Observable<{message: string, content:JsonDuctNetwork | {field: string, message: string}[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    if (ductNetwork instanceof(DuctNetwork)) {
      ductNetwork = this.ductNetworkToJson(ductNetwork);
    }
    return this.http.post<{message: string, content:JsonDuctNetwork}>(`${this.url}/apd/projects/${this.project.id}/ductnetworks`, ductNetwork, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  updateDuctNetwork(ductNetwork: DuctNetwork | JsonDuctNetwork): Observable<{message: string, content:JsonDuctNetwork | {field: string, message: string}[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    if (ductNetwork instanceof(DuctNetwork)) {
      ductNetwork = this.ductNetworkToJson(ductNetwork);
    }
    return this.http.patch<{message: string, content:JsonDuctNetwork}>(`${this.url}/apd/projects/${this.project.id}/ductnetworks/${ductNetwork.id}`, ductNetwork, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  deleteDuctNetwork(ductNetwork: DuctNetwork | JsonDuctNetwork): Observable<{message: string, content:JsonDuctNetwork | {field: string, message: string}[]}> {
    return this.http.delete<{message: string, content:JsonDuctNetwork}>(`${this.url}/apd/projects/${this.project.id}/ductnetworks/${ductNetwork.id}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, error.error))
    );
  }

  ductNetworkToJson(ductNetwork: DuctNetwork) {
    const jsonAir: JsonAir = {
      viscosity: ductNetwork.air.viscosity,
      density: ductNetwork.air.density,
      altitude: ductNetwork.air.altitude.getValue() as number,
      temperature: ductNetwork.air.temperature.getValue() as number
    }

    const jsonDuctSections: JsonDuctSection[] = [];

    ductNetwork.ductSections.forEach(ductSection => {
      const jsonDuctSection = this.ductSectionService.ductSectionToJson(ductSection);
      jsonDuctSections.push(jsonDuctSection);
    });

    const jsonDuctNetwork: JsonDuctNetwork = {
      id: ductNetwork.id,
      name: ductNetwork.name,
      projectId: ductNetwork.projectId,
      air: jsonAir,
      altitude: ductNetwork.altitude.getValue() as number,
      temperature: ductNetwork.temperature.getValue() as number,
      generalMaterial: ductNetwork.generalMaterial.getValue(),
      additionalApd: ductNetwork.additionalApd.getValue() as number,
      ductSections: jsonDuctSections,
      totalLinearApd: ductNetwork.totalLinearApd.getValue() as number,
      totalSingularApd: ductNetwork.totalSingularApd.getValue() as number,
      totalAdditionalApd: ductNetwork.totalAdditionalApd.getValue() as number,
      totalApd: ductNetwork.totalApd.getValue() as number
    }

    return jsonDuctNetwork;
  }

  jsonToDuctNetwork(jsonDuctNetwork: JsonDuctNetwork): DuctNetwork {
    const air = new Air;
    air.viscosity = jsonDuctNetwork.air.viscosity;
    air.density = jsonDuctNetwork.air.density;
    air.altitude.setValue(jsonDuctNetwork.air.altitude)
    air.temperature.setValue(jsonDuctNetwork.air.temperature);

    const ductSections: DuctSection[] = [];

    jsonDuctNetwork.ductSections.forEach(jsonDuctSection => {
      const ductSection = this.ductSectionService.jsonToDuctSection(jsonDuctSection);
      ductSections.push(ductSection);
    });

    const ductNetwork = new DuctNetwork;
    ductNetwork.id = jsonDuctNetwork.id;
    ductNetwork.name = jsonDuctNetwork.name;
    ductNetwork.projectId = jsonDuctNetwork.projectId;
    ductNetwork.air = air;
    ductNetwork.altitude.setValue(jsonDuctNetwork.altitude);
    ductNetwork.temperature.setValue(jsonDuctNetwork.temperature);
    ductNetwork.generalMaterial.setValue(jsonDuctNetwork.generalMaterial);
    ductNetwork.additionalApd.setValue(jsonDuctNetwork.additionalApd);
    ductNetwork.ductSections = ductSections;
    ductNetwork.totalLinearApd.setValue(jsonDuctNetwork.totalLinearApd);
    ductNetwork.totalSingularApd.setValue(jsonDuctNetwork.totalSingularApd);
    ductNetwork.totalAdditionalApd.setValue(jsonDuctNetwork.totalAdditionalApd);
    ductNetwork.totalApd.setValue(jsonDuctNetwork.totalApd);

    return ductNetwork;
  }

  private handleError(error: Error, errorValue: {message:string, content:{field:string, message:string}[]}) {
    console.log(error);
    return of(errorValue);
  }
}
