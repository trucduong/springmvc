export class ReturningFromCustomer {
  id: string;
  name: string;
  unit: string;
  quantity_bought: string;
  quantity_to_return : string;
  selling_price: string;
  discount: string;
  total: string;
  return_money: string;

  constructor(id?: string,name?: string,unit?:string, quantity_bought?: string,quantity_to_return?: string,selling_price?: string,discount?: string,total?: string,return_money?: string) {
    this.id= id;
    this.name= name;
    this.unit = unit;
    this.quantity_bought = quantity_bought;
    this.quantity_to_return = quantity_to_return;
    this.selling_price = selling_price;
    this.discount = discount;
    this.total = total;
    this.return_money = return_money;
  }
}