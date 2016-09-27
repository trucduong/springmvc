import { Injectable } from '@angular/core';


import {Warehouse} from '../models/warehouse'
import {WAREHOUSE} from  './warehouse.data';

import { Input } from '../models/warehouse.input'
import {INPUT} from './warehouse.data';

import { Transferring } from '../models/warehouse.transferring'
import {TRANSFERRING} from './warehouse.data';

import { ReturningFromCustomer } from '../models/warehouse.returning-from-customer'
import {RETURNINGFROMCUSTOMER} from './warehouse.data';

@Injectable()
export class WarehouseService {
    constructor() { }

    // Warehouse
    getWarehouses(): any {
        return WAREHOUSE;
    }

    getWarehouse(id: String): any {
        let warehouse: Warehouse;
        WAREHOUSE.forEach(element => {
            if (element.id == id) {
                warehouse = element;
                return;
            }
        });
        return warehouse;
    }

    saveWarehouse(item: Warehouse, isEditing: Boolean): Boolean {
        if (isEditing) {
            WAREHOUSE.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.address_1 = item.address_1;           
                    element.address_2 = item.address_2;           
                    element.address_3 = item.address_3;        
                    element.phone = item.phone;           
                    element.status = item.status;                   
                    return;
                }
            });
        } else {
            let warehouse = WAREHOUSE.push(item);
        }

        return true;
    }

    deleteWarehouse(id: String): Boolean {
        let warehouse: Warehouse;
        WAREHOUSE.forEach(function(element, index) {
            if (element.id == id) {
                WAREHOUSE.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


    // Input
    getInputs(): any {
        return INPUT;
    }

    getInput(id: String): any {
        let input: Input;
        INPUT.forEach(element => {
            if (element.id == id) {
                input = element;
                return;
            }
        });
        return input;
    }

    saveInput(item: Input, isEditing: Boolean): Boolean {
        if (isEditing) {
            INPUT.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                     element.quantity = item.quantity;
                    element.input_price = item.input_price;
                     element.retail_price = item.retail_price;
                    element.total = item.total;
                     element.note = item.note;
                    element.properties = item.properties;
                    
                    return;
                }
            });
        } else {
            let input = INPUT.push(item);
        }

        return true;
    }

    deleteInput(id: String): Boolean {
        let input: Input;
        INPUT.forEach(function(element, index) {
            if (element.id == id) {
                INPUT.splice(index, 1);
                
                return;
            }
        });

        return true;
    }

       // Transferring
    getTransferrings(): any {
        return TRANSFERRING;
    }

    getTransferring(id: String): any {
        let transferring: Transferring;
        TRANSFERRING.forEach(element => {
            if (element.id == id) {
                transferring = element;
                return;
            }
        });
        return transferring;
    }

    saveTransferring(item: Transferring, isEditing: Boolean): Boolean {
        if (isEditing) {
            TRANSFERRING.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                     element.inventories = item.inventories;
                    element.quantity_for_tranfer  = item.quantity_for_tranfer ;
                     element.input_price = item.input_price;
                    element.total = item.total;
                     element.note = item.note;
                    element.action = item.action;
                    
                    return;
                }
            });
        } else {
            let transferring = TRANSFERRING.push(item);
        }

        return true;
    }

    deleteTransferring(id: String): Boolean {
        let transferring: Transferring;
        TRANSFERRING.forEach(function(element, index) {
            if (element.id == id) {
                TRANSFERRING.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


       // ReturningFromCustomer
    getReturningFromCustomers(): any {
        return RETURNINGFROMCUSTOMER;
    }

    getReturningFromCustomer(id: String): any {
        let returningFromCustomer: ReturningFromCustomer;
        RETURNINGFROMCUSTOMER.forEach(element => {
            if (element.id == id) {
                returningFromCustomer = element;
                return;
            }
        });
        return returningFromCustomer;
    }

    saveReturningFromCustomer(item: ReturningFromCustomer, isEditing: Boolean): Boolean {
        if (isEditing) {
            RETURNINGFROMCUSTOMER.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                     element.quantity_bought = item.quantity_bought;
                    element.quantity_to_return  = item.quantity_to_return ;
                     element.selling_price = item.selling_price;
                    element.discount = item.discount;
                     element.total = item.total;
                    element.return_money = item.return_money;
                     element.action = item.action;
                    return;
                }
            });
        } else {
            let returningFromCustomer = RETURNINGFROMCUSTOMER.push(item);
        }

        return true;
    }

    deleteReturningFromCustomer(id: String): Boolean {
        let returningFromCustomer: ReturningFromCustomer;
        RETURNINGFROMCUSTOMER.forEach(function(element, index) {
            if (element.id == id) {
                RETURNINGFROMCUSTOMER.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


}