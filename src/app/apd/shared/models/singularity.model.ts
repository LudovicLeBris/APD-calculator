export abstract class Singularity {

  protected apiReference: string = '';
  protected name: string = '';
  protected icon: string = '';
  protected quantity: number = 0;

  getApiReference(): string {
    return this.apiReference;
  }

  getName(): string {
    return this.name;
  }

  getIcon(): string {
    return this.icon;
  }

  getQuantity(): number {
    return this.quantity;
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
