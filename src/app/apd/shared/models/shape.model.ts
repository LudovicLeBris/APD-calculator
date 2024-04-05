import { DataApd } from "./data-apd.model";

export class Shape extends DataApd {

  private type: 'circular' | 'rectangular';

  constructor(type:'circular' | 'rectangular') {
    super();
    this.apiReference = 'shape';
    this.name = 'Forme';
    this.unit = undefined;
    this.type = type;
    this.setDatas();
  }

  getType(): 'circular' | 'rectangular' {
    return this.type;
  }

  setType(type: 'circular' | 'rectangular'): void {
    this.type = type;
    this.setDatas();
  }

  private setDatas(): void {
    if (this.type == 'circular') {
      this.icon = '/assets/images/Circular.svg';
      this.setValue('Circulaire');
    } else {
      this.icon = '/assets/images/Rectangular.svg';
      this.setValue('Rectangulaire');
    }
  }
}
