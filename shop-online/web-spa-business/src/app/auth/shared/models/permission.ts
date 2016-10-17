export class Permission {
    id:string;
    name: string;
    note: string;
    
    constructor(id?:string,name?:string, note?:string) {
    this.id = id;
    this.name = name;
    this.note = note;
     }
}
