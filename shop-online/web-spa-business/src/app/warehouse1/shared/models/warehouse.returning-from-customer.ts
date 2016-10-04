export class ReturningFromCustomer {
  id: String;
  name: String;
  unit: String;
  quantity_bought: String;
  quantity_to_return : String;
  selling_price: String;
  discount: String;
  total: String;
  return_money: String;
  action: String;

  constructor(id: String,name: String,unit:String, quantity_bought: String,quantity_to_return : String,selling_price: String,discount: String,total: String,return_money: String, action: String) {
    this.id= id;
    this.name= name;
    this.unit = unit;
    this.quantity_bought = quantity_bought;
    this.quantity_to_return = quantity_to_return;
    this.selling_price = selling_price;
    this.discount = discount;
    this.total = total;
    this.return_money = return_money;
    this.action= action;
  }
}