export class WarehouseInput {
  id: string;
  name: string;
  unit: string;
  quantity: string;
  input_price: string;
  retail_price: string;
  total: string;
  note: string;

  constructor(  id?: string,name?: string,unit?:string, quantity?: string,input_price?: string,retail_price?: string,total?: string,note?: string) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.quantity = quantity;
    this.input_price = input_price;
    this.retail_price = retail_price;
    this.total = total;
    this.note = note;
  }
}