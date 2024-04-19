export abstract class DataApd {
  protected apiReference: string = '';
  protected name: string = '';
  protected icon: string = '';
  protected unit: string | undefined = undefined;
  protected value: number | string | undefined;

  getApiReference(): string {
    return this.apiReference;
  }

  setApiReference(apiReference: string): void {
    this.apiReference = apiReference;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getIcon(): string {
    return this.icon;
  }

  setIcon(icon: string): void {
    this.icon = icon;
  }

  getUnit(): string | undefined {
    return this.unit;
  }

  setUnit(unit: string | undefined): void {
    this.unit = unit;
  }

  getValue(): number | string | undefined {
    return this.value;
  }

  setValue(value: number | string | undefined): void {
    this.value = value;
  }

}

export interface StateDataApd {
  apiReference: string,
  name: string,
  icon: string,
  unit: string | undefined,
  value: string | number | undefined
}
