import { Injectable } from '@angular/core';

import {SupplierGroup} from '../models/supplier.group';
import {SUPPLIER_GROUPS} from './supplier.data';

import {Supplier} from '../models/supplier'
import {SUPPLIER} from  './supplier.data';


@Injectable()
export class SupplierService {

    constructor() { }

    // Group
    getSupplierGroups(): any {
        return SUPPLIER_GROUPS;
    }

       getSupplierGroup(id: String): any {
        let supplier: SupplierGroup;
        SUPPLIER_GROUPS.forEach(element => {
            if (element.id == id) {
                supplier = element;
                return;
            }
        });
        return supplier;
    }


    saveSupplierGroup(item: SupplierGroup, isEditing: Boolean): Boolean {
        if (isEditing) {
            SUPPLIER_GROUPS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;
                    
                    return;
                }
            });
        } else {
            let supplierGroup = SUPPLIER_GROUPS.push(item);
        }

        return true;
    }

    deleteSupplierGroup(id: String): Boolean {
        let supplierGroup: SupplierGroup;
        SUPPLIER_GROUPS.forEach(function(element, index) {
            if (element.id == id) {
                SUPPLIER_GROUPS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }

      // supplier
    getSuppliers(): any {
        return SUPPLIER;
    }

    getSupplier(phone: String): any {
        let supplier: Supplier;
        SUPPLIER.forEach(element => {
            if (element.phone == phone) {
                supplier = element;
                return;
            }
        });
        return supplier;
    }

    saveSupplier(item: Supplier, isEditing: Boolean): Boolean {
        if (isEditing) {
            SUPPLIER.forEach(element => {
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
            let supplier = SUPPLIER.push(item);
        }

        return true;
    }

    deleteSupplier(phone: String): Boolean {
        let supplier: Supplier;
        SUPPLIER.forEach(function(element, index) {
            if (element.phone == phone) {
                SUPPLIER.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


}