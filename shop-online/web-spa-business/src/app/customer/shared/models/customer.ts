export class Customer {
  name: string;
  phone: string;
  customerGroup: string;
  address: string;
  email: string;
  sex: string;
  birth_day: string;
  note: string;
  revenure: string;
  times: string;
  balance_due: string;

  constructor(  name?: string,phone?: string,customerGroup?: string,address?: string,email?: string,sex?: string,birth_day?: string,note?: string,revenure?: string,times?: string,balance_due?: string) {
    this.name = name;
     if (phone) {
      this.phone = phone;
    } else {
      this.phone = '-1';
    }
    this.customerGroup = customerGroup;
    this.address = address;
    this.email = email;
    this.sex = sex;
    this.birth_day = birth_day;
    this.note = note;
    this.revenure = revenure;
    this.times = times;
    this.balance_due = balance_due;
  }
}