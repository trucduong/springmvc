export class ReturningToSupplier {
  id: string;
  name: string;
  unit: string;
  quantity_inventories: string;
  quantity_to_return : string;
  input_price: string;
  total: string;
  note: string;

  constructor(id?: string,name?: string,unit?:string, quantity_inventories?: string,quantity_to_return?: string,input_price?: string,total?: string,note?: string) {
    this.id= id;
    this.name= name;
    this.unit = unit;
    this.quantity_inventories = quantity_inventories;
    this.quantity_to_return = quantity_to_return;
    this.input_price = input_price;
    this.total = total;
    this.note = note;
  }
}