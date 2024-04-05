import { DataApd } from "./data-apd.model";

export class Material extends DataApd {
  constructor() {
    super();
    this.apiReference = 'material';
    this.name = 'Matériaux';
    this.icon = '/assets/images/Material.svg';

    type materials =
      'Acier galvanisé' |
      'Aluminium' |
      'Acier' |
      'Fonte' |
      'Plastique' |
      'Béton lisse' |
      'Béton ordinaire' |
      'Briques' |
      'Terre cuite' |
      undefined

    (this.value as materials) = undefined;
  }
}
