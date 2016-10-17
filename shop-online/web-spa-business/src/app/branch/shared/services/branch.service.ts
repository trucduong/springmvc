import { Injectable } from '@angular/core';

import {Branch} from '../models/branch'
import {BRANCHS} from  './branch.data';


@Injectable()
export class BranchService {
    constructor() { }

    // Branch
       
    getBranchs(): any {
        let list: Branch[] = [];
        BRANCHS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getBranchsByName(name: string): any {
        let list: Branch[] = [];
        BRANCHS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getBranch(id: string): any {
        let branch: Branch;
        BRANCHS.forEach(element => {
            if (element.id == id) {
                branch = element;
                return;
            }
        });
        return branch;
    }

    saveBranch(item: Branch, isEditing: boolean): boolean {
        if (isEditing) {
            BRANCHS.forEach(element => {
                if (element.id == item.id) {
                    element.phone == item.phone;
                    element.name = item.name;
                    element.address = item.address;
                    element.email = item.email;
                    element.note = item.note;          
                    return;
                }
            });
        } else {
            BRANCHS.push(item);
        }
        return true;
    }

    deleteBranch(id: string): boolean {
        let branch: Branch;
        BRANCHS.forEach(function(element, index) {
            if (element.id == id) {
                BRANCHS.splice(index, 1);
                return;
            }
        });
        return true;
    }

}