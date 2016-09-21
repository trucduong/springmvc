export class Transferring {
  id: String;
  name: String;
  unit: String;
  inventories: String;
  quantity_for_tranfer : String;
  input_price: String;
  total: String;
  note: String;
  action: String;

  constructor(  id: String,name: String,unit:String, inventories: String,quantity_for_tranfer : String,input_price: String,total: String,note: String,action: String) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.inventories = inventories;
    this.quantity_for_tranfer =    quantity_for_tranfer;
    this.input_price = input_price;
    this.total = total;
    this.note = note;
    this.action = action;
  }
}