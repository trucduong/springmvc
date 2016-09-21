export class ProductGroup {
  id: String;
  name: String;
  code: String;
  status: String;

  constructor(id: String, name: String, code: String, status: String) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.status = status;
  }
}