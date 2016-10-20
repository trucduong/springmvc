import { Injectable } from '@angular/core';


import {Warehouse} from '../models/warehouse';
import {WarehouseInput} from '../models/warehouse.input';
import {ReturningFromCustomer} from '../models/warehouse.returning-from-customer';
import {ReturningToSupplier} from '../models/warehouse.returning-to-supplier';
import {Transferring} from '../models/warehouse.transferring';

import {WAREHOUSES, WAREHOUSEINPUTS, RETURNINGFROMCUSTOMERS, TRANSFERRINGS, RETURNINGTOSUPPLIERS} from  './warehouse.data';


@Injectable()
export class WarehouseService {
    constructor() { }


    // warehouse
       
    getWarehouses(): any {
        let list: Warehouse[] = [];
        WAREHOUSES.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getWarehousesByName(name: string): any {
        let list: Warehouse[] = [];
        WAREHOUSES.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getWarehouse(id: string): any {
        let warehouse: Warehouse;
        WAREHOUSES.forEach(element => {
            if (element.id == id) {
                warehouse = element;
                return;
            }
        });
        return warehouse;
    }

    saveWarehouse(item: Warehouse, isEditing: boolean): boolean {
        if (isEditing) {
            WAREHOUSES.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.address = item.address;
                    element.phone = item.phone;
                    element.status == item.status;
                    element.use = item.use;
                    element.branch = item.branch;
                    element.note = item.note;
           
                    
                    return;
                }
            });
        } else {
            WAREHOUSES.push(item);
        }

        return true;
    }

    deleteWarehouse(id: string): boolean {
        let warehouse: Warehouse;
        WAREHOUSES.forEach(function(element, index) {
            if (element.id == id) {
               WAREHOUSES.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


     // ReturningFromCustomer
       
    getReturningFromCustomers(): any {
        let list: ReturningFromCustomer[] = [];
        RETURNINGFROMCUSTOMERS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getReturningFromCustomersByName(name: string): any {
        let list: ReturningFromCustomer[] = [];
        RETURNINGFROMCUSTOMERS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getReturningFromCustomer(id: string): any {
        let returningFromCustomer: ReturningFromCustomer;
        RETURNINGFROMCUSTOMERS.forEach(element => {
            if (element.id == id) {
                returningFromCustomer = element;
                return;
            }
        });
        return returningFromCustomer;
    }

    saveReturningFromCustomer(item: ReturningFromCustomer, isEditing: boolean): boolean {
        if (isEditing) {
            RETURNINGFROMCUSTOMERS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                    element.quantity_bought = item.quantity_bought;
                    element.quantity_to_return = item.quantity_to_return;
                    element.selling_price = item.selling_price;
                    element.discount = item.discount;
                    element.total = item.total;
                    element.return_money = item.return_money;
  
                    return;
                }
            });
        } else {
            RETURNINGFROMCUSTOMERS.push(item);
        }
        return true;
    }

    deleteReturningFromCustomer(id: string): boolean {
        let returningFromCustomer: ReturningFromCustomer;
        RETURNINGFROMCUSTOMERS.forEach(function(element, index) {
            if (element.id == id) {
               RETURNINGFROMCUSTOMERS.splice(index, 1);           
                return;
            }
        });
        return true;
    }

    // ReturningToSupplier
       
    getReturningToSuppliers(): any {
        let list: ReturningToSupplier[] = [];
        RETURNINGTOSUPPLIERS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getReturningToSuppliersByName(name: string): any {
        let list: ReturningToSupplier[] = [];
        RETURNINGTOSUPPLIERS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getReturningToSupplier(id: string): any {
        let returningToSupplier: ReturningToSupplier;
        RETURNINGTOSUPPLIERS.forEach(element => {
            if (element.id == id) {
                returningToSupplier = element;
                return;
            }
        });
        return returningToSupplier;
    }

    saveReturningToSupplier(item: ReturningToSupplier, isEditing: boolean): boolean {
        if (isEditing) {
            RETURNINGTOSUPPLIERS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                    element.quantity_inventories = item.quantity_inventories;
                    element.quantity_to_return = item.quantity_to_return;
                    element.input_price = item.input_price;
                    element.total = item.total;
                    element.note = item.note;
                    return;
                }
            });
        } else {
            RETURNINGTOSUPPLIERS.push(item);
        }
        return true;
    }

    deleteReturningToSupplier(id: string): boolean {
        let returningToSupplier: ReturningToSupplier;
        RETURNINGTOSUPPLIERS.forEach(function(element, index) {
            if (element.id == id) {
               RETURNINGTOSUPPLIERS.splice(index, 1);           
                return;
            }
        });
        return true;
    }


     // warehouseInput
       
    getWarehouseInputs(): any {
        let list: WarehouseInput[] = [];
        WAREHOUSEINPUTS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getWarehouseInputsByName(name: string): any {
        let list: WarehouseInput[] = [];
        WAREHOUSEINPUTS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getWarehouseInput(id: string): any {
        let warehouseInput: WarehouseInput;
        WAREHOUSEINPUTS.forEach(element => {
            if (element.id == id) {
                warehouseInput = element;
                return;
            }
        });
        return warehouseInput;
    }

    saveWarehouseInput(item: WarehouseInput, isEditing: boolean): boolean {
        if (isEditing) {
            WAREHOUSEINPUTS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                    element.quantity = item.quantity;
                    element.input_price = item.input_price;
                    element.retail_price = item.retail_price;
                    element.total = item.total;
                    element.note = item.note;                  
                    return;
                }
            });
        } else {
            WAREHOUSEINPUTS.push(item);
        }
        return true;
    }

    deleteWarehouseInput(id: string): boolean {
        let warehouseInput: WarehouseInput;
        WAREHOUSEINPUTS.forEach(function(element, index) {
            if (element.id == id) {
               WAREHOUSEINPUTS.splice(index, 1);           
                return;
            }
        });
        return true;
    }


     // Transferring
       
    getTransferrings(): any {
        let list: Transferring[] = [];
        TRANSFERRINGS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getTransferringsByName(name: string): any {
        let list: Transferring[] = [];
        TRANSFERRINGS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getTransferring(id: string): any {
        let transferring: Transferring;
        TRANSFERRINGS.forEach(element => {
            if (element.id == id) {
                transferring = element;
                return;
            }
        });
        return transferring;
    }

    saveTransferring(item: Transferring, isEditing: boolean): boolean {
        if (isEditing) {
            TRANSFERRINGS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.unit = item.unit;
                    element.inventories = item.inventories;
                    element.quantity_for_tranfer = item.quantity_for_tranfer;
                    element.input_price = item.input_price;
                    element.total = item.total;
                    element.note = item.note;                  
                    return;
                }
            });
        } else {
            TRANSFERRINGS.push(item);
        }
        return true;
    }

    deleteTransferring(id: string): boolean {
        let transferring: Transferring;
        TRANSFERRINGS.forEach(function(element, index) {
            if (element.id == id) {
               TRANSFERRINGS.splice(index, 1);           
                return;
            }
        });
        return true;
    }


}