import { Injectable } from '@angular/core';
import { DuctNetwork, JsonDuctNetwork } from '../models/duct-network.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { DuctSection, JsonDuctSection, StateDuctSection } from '../models/duct-section.model';
import { Air, JsonAir } from '../models/air.model';
import { diameters } from '../../../types/diameters';
import { materials } from '../../../types/materials';
import { singularities } from '../../../types/singularity';
import { Singularity } from '../models/singularity.model';
import { SingularityFactory } from '../models/singularityFactory';
import { Errormessage } from '../../../types/error-message';

@Injectable({
  providedIn: 'root'
})
export class DuctSectionService {

  ductNetwork: DuctNetwork = new DuctNetwork;
  url: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {}

  getDuctSections(): Observable<{message: string, content:JsonDuctSection[] | Errormessage[]}> {
    return this.http.get<{message: string, content: JsonDuctSection[]}>(`${this.url}/apd/ductnetworks/${this.ductNetwork.id}/ductsections`).pipe(
      tap(response => console.log(response)),
      catchError(error => this.handleError(error, error.error))
    );
  }

  getDuctSectionById(ductSectionId: number): Observable<{message: string, content:JsonDuctSection | Errormessage[]}> {
    return this.http.get<{message: string, content:JsonDuctSection}>(`${this.url}/apd/ductnetworks/${this.ductNetwork.id}/ductsections/${ductSectionId}`).pipe(
      tap(response => console.log(response)),
      catchError(error => this.handleError(error, error.error))
    );
  }

  addDuctSection(ductSection: DuctSection | JsonDuctSection): Observable<{message: string, content:JsonDuctSection | Errormessage[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    if (ductSection instanceof(DuctSection)) {
      ductSection = this.ductSectionToJson(ductSection);
    }
    return this.http.post<{message: string, content:JsonDuctSection}>(`${this.url}/apd/ductnetworks/${this.ductNetwork.id}/ductsections`, ductSection, httpOptions).pipe(
      tap(response => console.log(response)),
      catchError(error => this.handleError(error, error.error))
    );
  }

  updateDuctSection(ductSection: DuctSection | JsonDuctSection): Observable<{message: string, content:JsonDuctSection | Errormessage[]}> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    if (ductSection instanceof(DuctSection)) {
      ductSection = this.ductSectionToJson(ductSection);
    }
    return this.http.patch<{message: string, content:JsonDuctSection}>(`${this.url}/apd/ductnetworks/${this.ductNetwork.id}/ductsections/${ductSection.id}`, ductSection, httpOptions).pipe(
      tap(response => console.log(response)),
      catchError(error => this.handleError(error, error.error))
    );
  }

  deleteDuctSection(ductSection: DuctSection | JsonDuctSection): Observable<{message: string, content:JsonDuctSection | Errormessage[]}> {
    return this.http.delete<{message: string, content:JsonDuctSection}>(`${this.url}/apd/ductnetworks/${this.ductNetwork.id}/ductsections/${ductSection.id}`).pipe(
      tap(response => console.log(response)),
      catchError(error => this.handleError(error, error.error))
    );
  }

  private handleError(error: Error, errorValue: {message:string, content:Errormessage[]}) {
    console.log(error);
    return of(errorValue);
  }

  ductSectionToJson(ductSection: DuctSection): JsonDuctSection {
    const jsonAir: JsonAir = {
      viscosity: ductSection.air.viscosity,
      density: ductSection.air.density,
      altitude: ductSection.air.altitude.getValue() as number,
      temperature: ductSection.air.temperature.getValue() as number
    }

    const jsonSingularities: singularities = {};

    ductSection.singularities.forEach(singularity => {
      jsonSingularities[singularity.getApiReference()] = singularity.getQuantity()
    });

    const jsonDuctSection: JsonDuctSection = {
      id: ductSection.id,
      name: ductSection.name,
      ductNetworkId: ductSection.ductNetworkId,
      air: jsonAir,
      shape: ductSection.shape.getType() as 'circular' | 'rectangular',
      diameter: ductSection.diameter.getValue() as diameters,
      width: ductSection.width.getValue() as number | undefined,
      height: ductSection.height.getValue() as number | undefined,
      material: ductSection.material.getValue() as materials,
      flowrate: ductSection.flowrate.getValue() as number,
      length: ductSection.length.getValue() as number,
      singularities : jsonSingularities,
      additionalApd: ductSection.additionalApd.getValue() as number,
      equivDiameter: ductSection.equivDiameter,
      ductSectionsSection: ductSection.ductSectionsSection.getValue() as number,
      flowspeed: ductSection.flowspeed.getValue() as number,
      linearApd: ductSection.linearApd.getValue() as number,
      singularApd: ductSection.singularApd.getValue() as number,
      totalApd : ductSection.totalApd.getValue() as number
    }

    return jsonDuctSection;
  }

  jsonToDuctSection(jsonDuctSection: JsonDuctSection): DuctSection {
    const air = new Air;
    air.viscosity = jsonDuctSection.air.viscosity;
    air.density = jsonDuctSection.air.density;
    air.altitude.setValue(jsonDuctSection.air.altitude)
    air.temperature.setValue(jsonDuctSection.air.temperature);

    const singularities: Singularity[] = [];

    for (const [singularityType, quantity] of Object.entries(jsonDuctSection.singularities)) {
      const singularity = (new SingularityFactory).createSingularity(singularityType);
      if (singularity) {
        singularity.setQuantity(quantity);
        singularities.push(singularity);
      }
    }

    const ductSection = new DuctSection;
    ductSection.id = jsonDuctSection.id;
    ductSection.name = jsonDuctSection.name;
    ductSection.ductNetworkId = jsonDuctSection.ductNetworkId;
    ductSection.air = air;
    ductSection.shape.setType(jsonDuctSection.shape);
    ductSection.diameter.setValue(jsonDuctSection.diameter);
    ductSection.width.setValue(jsonDuctSection.width);
    ductSection.height.setValue(jsonDuctSection.height);
    ductSection.material.setValue(jsonDuctSection.material);
    ductSection.flowrate.setValue(jsonDuctSection.flowrate);
    ductSection.length.setValue(jsonDuctSection.length);
    ductSection.singularities = singularities;
    ductSection.additionalApd.setValue(jsonDuctSection.additionalApd);
    ductSection.equivDiameter = (jsonDuctSection.equivDiameter as number);
    ductSection.equivDiameter = (jsonDuctSection.equivDiameter as number);
    ductSection.ductSectionsSection.setValue(jsonDuctSection.ductSectionsSection as number);
    ductSection.flowspeed.setValue(jsonDuctSection.flowspeed);
    ductSection.linearApd.setValue(jsonDuctSection.linearApd);
    ductSection.singularApd.setValue(jsonDuctSection.singularApd);
    ductSection.totalApd.setValue(jsonDuctSection.totalApd);

    return ductSection;
  }

  stateToDuctSection(stateDuctSection: StateDuctSection): DuctSection {
    const air = new Air;
    air.viscosity = stateDuctSection.air.viscosity;
    air.density = stateDuctSection.air.density;
    air.altitude.setValue(stateDuctSection.air.altitude.value);
    air.temperature.setValue(stateDuctSection.air.temperature.value);

    const singularities: Singularity[] = [];

    stateDuctSection.singularities.forEach(stateSingularity => {
      const singularity = (new SingularityFactory).createSingularity(stateSingularity.apiReference);
      if (singularity) {
        singularity.setQuantity(stateSingularity.quantity);
        singularities.push(singularity);
      }
    });

    const ductSection = new DuctSection;
    ductSection.id = stateDuctSection.id;
    ductSection.name = stateDuctSection.name;
    ductSection.ductNetworkId = stateDuctSection.ductNetworkId;
    ductSection.air = air;
    ductSection.shape.setType(stateDuctSection.shape.type);
    ductSection.diameter.setValue(stateDuctSection.diameter?.value as diameters);
    ductSection.width.setValue(stateDuctSection.width?.value);
    ductSection.height.setValue(stateDuctSection.height?.value);
    ductSection.material.setValue(stateDuctSection.material.value as materials);
    ductSection.flowrate.setValue(stateDuctSection.flowrate.value);
    ductSection.length.setValue(stateDuctSection.length.value);
    ductSection.singularities = singularities;
    ductSection.additionalApd.setValue(stateDuctSection.additionalApd?.value);
    ductSection.equivDiameter = (stateDuctSection.equivDiameter?.value as number);
    ductSection.ductSectionsSection.setValue(stateDuctSection.ductSectionsSection?.value as number);
    ductSection.flowspeed.setValue(stateDuctSection.flowspeed?.value);
    ductSection.linearApd.setValue(stateDuctSection.linearApd?.value);
    ductSection.singularApd.setValue(stateDuctSection.singularApd?.value);
    ductSection.totalApd.setValue(stateDuctSection.totalApd?.value);

    return ductSection;
  }
}
