import { Injectable } from '@angular/core';

import { Account } from '../models/account'
import {ACCOUNTS} from './auth.data';

import { Permission } from '../models/permission'
import {PERMISSION_LIST, PERMISSION_GROUPS} from './auth.data';

@Injectable()
export class AuthService {

    constructor() { }

      // Account
    getAccounts(): any {
        let list: Account[] = [];
        ACCOUNTS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getAccountsByName(name: string): any {
        let list: Account[] = [];
        ACCOUNTS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getAccount(id: string): any {
        let account: Account;
        ACCOUNTS.forEach(element => {
            if (element.id == id) {
                account = element;
                return;
            }
        });
        return account;
    }

    saveAccount(item: Account, isEditing: boolean): boolean {
        if (isEditing) {
            ACCOUNTS.forEach(element => {
                if (element.id == item.id) {
                    element.branch = item.branch;
                    element.name = item.name;
                    element.loginName = item.loginName;
                    element.status = item.status;
                    element.note = item.note;
                    element.permission = item.permission;                    
                    return;
                }
            });
        } else {
            ACCOUNTS.push(item);
        }

        return true;
    }

    deleteAccount(id: string): boolean {
        let account: Account;
        ACCOUNTS.forEach(function(element, index) {
            if (element.id == id) {
                ACCOUNTS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


        // Permission
    getPermissions(): any {
        let list: Permission[] = [];
        PERMISSION_LIST.forEach(element => {
            list.push(element);
        });

        return list;
    }


    getPermissionNew() {
        return PERMISSION_LIST;
    }

    getPermissionGroupNew() {
        return PERMISSION_GROUPS;
    }

    getPermissionsByName(name: string): any {
        let list: Permission[] = [];
        PERMISSION_LIST.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getPermission(id: string): any {
        let permission: Permission;
        PERMISSION_LIST.forEach(element => {
            if (element.id == id) {
                permission = element;
                return;
            }
        });
        return permission;
    }

    savePermission(item: Permission, isEditing: boolean): boolean {
        if (isEditing) {
            PERMISSION_LIST.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;
                    return;
                }
            });
        } else {
            PERMISSION_LIST.push(item);
        }

        return true;
    }

    deletePermission(id: string): boolean {
        let permission: Permission;
        PERMISSION_LIST.forEach(function(element, index) {
            if (element.id == id) {
                PERMISSION_LIST.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


}