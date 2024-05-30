import { Injectable } from '@angular/core';
import { DataApd, StateDataApd } from './models/data-apd.model';
import { DataApdFactory } from './models/data-apdFactory';

@Injectable({
  providedIn: 'root'
})
export class DataTypesService {

  stateToDataApd(stateDataApd: StateDataApd): DataApd | undefined {
    const dataApd = (new DataApdFactory).createDataApd(stateDataApd.apiReference)
    if (dataApd) {
      dataApd.setApiReference(stateDataApd.apiReference);
      dataApd.setName(stateDataApd.name);
      dataApd.setIcon(stateDataApd.icon);
      dataApd.setUnit(stateDataApd.unit);
      dataApd.setValue(stateDataApd.value);
    }

    return dataApd;
  }

}
