import { materials } from "../../../types/materials";
import { DataApd } from "./data-apd.model";

export class Material extends DataApd {

  protected override value: materials;

  materialList = {
    galvanised_steel: 'Acier galvanisé',
    aluminium: 'Aluminium',
    steel: 'Acier',
    cast_iron: 'Fonte',
    plastic: 'Plastique',
    smooth_concrete: 'Béton doux',
    ordinary_concrete: 'Béton ordinaire',
    brick: 'Brique',
    terracotta: 'Terre cuite',
  }

  constructor() {
    super();
    this.apiReference = 'material';
    this.name = 'Matériaux';
    this.icon = '/assets/images/Material.svg';
    this.value = 'galvanised_steel';
  }

  getMaterialName() {
    const {[this.value as materials]: materialName} = this.materialList
    return materialName
  }

  override setValue(value: materials): void {
    this.value = value;
  }

  override getValue(): materials {
    return this.value;
  }

}
