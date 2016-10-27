export class Inventory {
  id: string;
  name: string;
  unit: string;
  input_price: string;
  inventory_quantity: string;
  real_quantity: string;
  disparity: string;
  note: string;

  constructor(  id?: string,name?: string,unit?:string, input_price?: string, inventory_quantity?: string, real_quantity?:string ,note?: string) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.input_price = input_price;
    this.inventory_quantity = inventory_quantity;
    this.real_quantity = real_quantity;
    this.note = note;
  }
}