export class Customer {
  name: String;
  phone: String;
  birth_day: String;
  sex: String;
  address_detail: String;
  address_1: String;
  address_2: String;
  address_3: String;
  properties: String;

  constructor(name: String, phone: String, birth_day: String, sex: String, address_detail: String, address_1: String, address_2:String, address_3: String, properties: String) {
    this.name = name;
    this.phone = phone;
    this.birth_day = birth_day;
    this.sex = sex;
    this.address_detail = address_detail;
    this.address_1 = address_1;
    this.address_2 = address_2;
    this.address_3 = address_3;
    this.properties = properties;
  }
}