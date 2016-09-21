import { Injectable } from '@angular/core';

import { CustomerGroup } from '../models/customer.group'
import {CUSTOMER_GROUPS} from './customer.data';

import {Customer} from '../models/customer'
import {CUSTOMER} from  './customer.data';


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
            CUSTOMER_GROUPS.push(item);
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


    // Customer
    getCustomers(): any {
        return CUSTOMER;
    }

    getCustomer(phone: String): any {
        let customer: Customer;
        CUSTOMER.forEach(element => {
            if (element.phone == phone) {
                customer = element;
                return;
            }
        });
        return customer;
    }

    saveCustomer(item: Customer, isEditing: Boolean): Boolean {
        if (isEditing) {
            CUSTOMER.forEach(element => {
                if (element.phone == item.phone) {
                    element.name = item.name;
                    element.birth_day = item.birth_day;
                     element.sex = item.sex;
                    element.address_detail = item.address_detail;
                     element.address_1 = item.address_1;
                    element.address_2 = item.address_2;
                     element.address_3 = item.address_3;
                    element.properties = item.properties;
                    return;
                }
            });
        } else {
            let customer = CUSTOMER.push(item);
        }

        return true;
    }

    deleteCustomer(phone: String): Boolean {
        let customer: Customer;
        CUSTOMER.forEach(function(element, index) {
            if (element.phone == phone) {
                CUSTOMER.splice(index, 1);
                
                return;
            }
        });

        return true;
    }

}