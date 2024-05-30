import { DataApd } from "./data-apd.model";

export class Section extends DataApd {
  constructor() {
    super();
    this.apiReference = 'ductSectionsSection';
    this.name = 'Section';
    this.icon = '/assets/images/Section.svg';
    this.unit = 'm²';
  }
}
