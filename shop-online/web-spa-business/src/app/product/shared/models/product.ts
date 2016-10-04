export class Product {
  id: string;
  name: string;
  image: string;
  unit: string;
  inputPrice: string;
  wholesalePrice: string;
  retailPrice: string;
  productGroup: string;
  alarmInventory: string;
  status: string;
  note: string;

  constructor(  id?: string, name?: string, image?: string, unit?: string, inputPrice?: string, wholesalePrice?: string, retailPrice?: string, productGroup?: string, alarmInventory?: string, status?: string, note?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = '-1';
    }
  this.name= name;
  this.image= image;
  this.unit= unit;
  this.inputPrice = inputPrice;
  this.wholesalePrice = wholesalePrice;
  this.retailPrice = retailPrice;
  this.productGroup = productGroup;
  this.alarmInventory = alarmInventory;
  this.status = status;
  this.note = note;
  }
}