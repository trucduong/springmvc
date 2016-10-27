export class Warehouse {
  id: String;
  name: String;
  address_1: String;
  address_2: String;
  address_3: String;
  phone: String;
  status: String


  constructor(id: String, name: String, address_1: String, address_2: String, address_3: String, phone: String,status: String) {
    this.id = id;
    this.name = name;
    this.address_1 = address_1;
    this.address_2 = address_2;
    this.address_3 = address_3;
    this.phone = phone;
    this.status = status;

  }
}