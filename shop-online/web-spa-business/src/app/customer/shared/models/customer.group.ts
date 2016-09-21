export class CustomerGroup {
  id: string;
  name: string;
  note: string;

  constructor(id?: string, name?: string, note?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = '-1';
    }
    this.name = name;
    this.note = note;
  }
}