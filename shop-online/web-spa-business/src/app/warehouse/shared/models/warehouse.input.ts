export class Input {
  id: String;
  name: String;
  unit: String;
  quantity: String;
  input_price: String;
  retail_price: String;
  total: String;
  note: String;
  properties: String;

  constructor(  id: String,name: String,unit:String, quantity: String,input_price: String,retail_price: String,total: String,note: String,properties: String) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.quantity = quantity;
    this.input_price = input_price;
    this.retail_price = retail_price;
    this.total = total;
    this.note = note;
    this.properties = properties;
  }
}