import { Injectable } from '@angular/core';

import { CustomerGroup } from '../models/customer.group'
import {CUSTOMER_GROUPS} from './customer.data';

@Injectable()
export class CustomerService {
    constructor() { }

    // Group
    getCustomerGroups(): any {
        return CUSTOMER_GROUPS;
    }

    getCustomerGroup(id: String): any {
        let customer: CustomerGroup;
        CUSTOMER_GROUPS.forEach(element => {
            if (element.id == id) {
                customer = element;
                return;
            }
        });
        return customer;
    }

    saveCustomerGroup(item: CustomerGroup, isEditing: Boolean): Boolean {
        if (isEditing) {
            CUSTOMER_GROUPS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;
                    
                    return;
                }
            });
        } else {
            let customerGroup = CUSTOMER_GROUPS.push(item);
        }

        return true;
    }

    deleteCustomerGroup(id: String): Boolean {
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