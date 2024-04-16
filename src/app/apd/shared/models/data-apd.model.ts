export abstract class DataApd {
  protected apiReference: string = '';
  protected name: string = '';
  protected icon: string = '';
  protected unit: string | undefined = undefined;
  protected value: number | string | undefined;

  getApiReference(): string {
    return this.apiReference;
  }

  getName(): string {
    return this.name;
  }

  getIcon(): string {
    return this.icon;
  }

  getUnit(): string | undefined {
    return this.unit;
  }

  getValue(): number | string | undefined {
    return this.value;
  }

  setValue(value: number | string | undefined): void {
    this.value = value;
  }

}
