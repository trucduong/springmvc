export class Warehouse {
  id: string;
  name: string;
  address: string;
  phone: string;
  status: string;
  use: string;
  branch: string;
  note: string;
  

  constructor(id?: string, name?: string,address?: string,phone?:string, status?: string,use?:string, branch?:string, note?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = '-1';
    }
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.status = status;
    this.use = use;
    this.note = note;
    this.branch = branch;
    
  }
}