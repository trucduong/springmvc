import {Permission} from '../models/permission';

export class Account {
  id: string;
  branch: string;
  name: string;
  loginName: string;
  status: string;
  note: string;
  permission: Permission[];

  constructor(id?: string, branch?: string, name?: string, loginName?:string, status?:string, note?:string, permission?:Permission[]) {
    if (id) {
      this.id = id;
    } else {
      this.id = '-1';
    }
    this.branch = branch;
    this.name = name;
    this.loginName = loginName;
    this.status = status;
    this.note = note;
    this.permission = permission;
   
  }
}



