import {Permission} from '../models/permission';


export class PermissionGroup {
    id: string;
    nameGroup: string;
    permission: Permission[];
    note: string;

    constructor(id?:string,nameGroup?:string, permission?: Permission[], note?:string) {
    this.id = id;
    this.nameGroup = nameGroup;
    this.permission = permission;
    this.note = note;
  }
}