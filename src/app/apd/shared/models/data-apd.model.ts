export abstract class DataApd {
  protected apiReference: string = '';
  protected name: string = '';
  protected icon: string = '';
  protected unit: string | undefined = undefined;
  protected value: number | string = 0;

  getValue(): number | string {
    return this.value;
  }

  setValue(value: number | string): void {
    this.value = value;
  }
}
