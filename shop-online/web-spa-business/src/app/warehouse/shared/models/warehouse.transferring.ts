export class Transferring {
  id: string;
  name: string;
  unit: string;
  inventories: string;
  quantity_for_tranfer : string;
  input_price: string;
  total: string;
  note: string;

  constructor(  id?: string,name?: string,unit?:string, inventories?: string,quantity_for_tranfer?: string,input_price?: string,total?: string,note?: string) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.inventories = inventories;
    this.quantity_for_tranfer =    quantity_for_tranfer;
    this.input_price = input_price;
    this.total = total;
    this.note = note;
  }
}