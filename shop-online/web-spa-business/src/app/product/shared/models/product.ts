export class Product {
    code: String;
    name:String;
    image:String;
    unit:String;
    group:String;
    input_price:String;
    retail_price:String;
    wholesale_price: String;
    saleof_per:String;
    saleof_price:String;
    warning_number:String;
    status:String;
    note:String;

  constructor( code: String,name:String,image:String,unit:String,group:String,input_price:String,retail_price:String,wholesale_price: String,saleof_per:String,saleof_price:String,warning_number:String,status:String, note:String) {
    this.code = code;
    this.name= name;
    this.image = image;
    this.unit= unit;
    this.group=group;
    this.input_price= input_price;
    this.retail_price = retail_price;
    this.wholesale_price = wholesale_price;
    this.saleof_per = saleof_per;
    this.saleof_price = saleof_price;
    this.warning_number = warning_number;
    this.status = status;
    this.note = note;
  }
}