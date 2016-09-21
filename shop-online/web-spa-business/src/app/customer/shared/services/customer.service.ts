import { Injectable } from '@angular/core';

import { CustomerGroup } from '../models/customer.group'
import {CUSTOMER_GROUPS} from './customer.data';

@Injectable()
export class CustomerService {
    constructor() { }

    // Group
    getCustomerGroups(): any {
        let list: CustomerGroup[] = [];
        CUSTOMER_GROUPS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getCustomerGroupsByName(name: string): any {
        let list: CustomerGroup[] = [];
        CUSTOMER_GROUPS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getCustomerGroup(id: string): any {
        let customer: CustomerGroup;
        CUSTOMER_GROUPS.forEach(element => {
            if (element.id == id) {
                customer = element;
                return;
            }
        });
        return customer;
    }

    saveCustomerGroup(item: CustomerGroup, isEditing: boolean): boolean {
        if (isEditing) {
            CUSTOMER_GROUPS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;
                    
                    return;
                }
            });
        } else {
            CUSTOMER_GROUPS.push(item);
        }

        return true;
    }

    deleteCustomerGroup(id: string): boolean {
        let customerGroup: CustomerGroup;
        CUSTOMER_GROUPS.forEach(function(element, index) {
            if (element.id == id) {
                CUSTOMER_GROUPS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }
}