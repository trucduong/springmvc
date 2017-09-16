export class Branch {
  id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  note: string;


  constructor(id?: string, name?: string,phone?: string,address?: string,email?: string,note?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = '-1';
    }
    this.name = name;
    this.phone = phone;
    this.address = address
    this.email = email;
    this.note = note;
  }
}