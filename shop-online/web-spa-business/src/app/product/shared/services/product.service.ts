import { Injectable } from '@angular/core';

import { ProductGroup } from '../models/product.group'
import {PRODUCT_GROUPS} from './product.data';

import {Product} from '../models/product'
import {PRODUCTS} from  './product.data';

import {Unit} from '../models/unit'
import {UNITS} from  './product.data';

@Injectable()
export class ProductService {
    constructor() { }

    // Group
    getProductGroups(): any {
        let list: ProductGroup[] = [];
        PRODUCT_GROUPS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getProductGroupsByName(name: string): any {
        let list: ProductGroup[] = [];
        PRODUCT_GROUPS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getProductGroup(id: string): any {
        let product: ProductGroup;
        PRODUCT_GROUPS.forEach(element => {
            if (element.id == id) {
                product = element;
                return;
            }
        });
        return product;
    }

    saveProductGroup(item: ProductGroup, isEditing: boolean): boolean {
        if (isEditing) {
            PRODUCT_GROUPS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;
                    element.status = item.status;
                    
                    return;
                }
            });
        } else {
            PRODUCT_GROUPS.push(item);
        }

        return true;
    }

    deleteProductGroup(id: string): boolean {
        let productGroup: ProductGroup;
        PRODUCT_GROUPS.forEach(function(element, index) {
            if (element.id == id) {
                PRODUCT_GROUPS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


    // product
       
    getProducts(): any {
        let list: Product[] = [];
        PRODUCTS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getProductsByName(name: string): any {
        let list: Product[] = [];
        PRODUCTS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getProduct(id: string): any {
        let product: Product;
        PRODUCTS.forEach(element => {
            if (element.id == id) {
                product = element;
                return;
            }
        });
        return product;
    }

    saveProduct(item: Product, isEditing: boolean): boolean {
        if (isEditing) {
            PRODUCTS.forEach(element => {
                if (element.id == item.id) {
                    element.name == item.name;
                    element.image = item.image;
                    element.unit = item.unit;
                    element.inputPrice = item.inputPrice;
                    element.wholesalePrice = item.wholesalePrice;
                    element.productGroup = item.productGroup;
                    element.alarmInventory = item.alarmInventory;
                    element.status = item.status;
                    element.note = item.note;
                    
                    return;
                }
            });
        } else {
            PRODUCTS.push(item);
        }

        return true;
    }

    deleteProduct(id: string): boolean {
        let product: Product;
        PRODUCTS.forEach(function(element, index) {
            if (element.id == id) {
                PRODUCTS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


    //unit
      getUnits(): any {
        let list: Unit[] = [];
        UNITS.forEach(element => {
            list.push(element);
        });

        return list;
    }

    getUnitsByName(name: string): any {
        let list: Unit[] = [];
        UNITS.forEach(element => {
            if (element.name.indexOf(name) != -1) {
                list.push(element);
            }
        });

        return list;
    }

    getUnit(id: string): any {
        let unit: Unit;
       UNITS.forEach(element => {
            if (element.id == id) {
                unit = element;
                return;
            }
        });
        return unit;
    }

    saveUnit(item: Unit, isEditing: boolean): boolean {
        if (isEditing) {
            UNITS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;
                    
                    return;
                }
            });
        } else {
            UNITS.push(item);
        }

        return true;
    }

    deleteUnit(id: string): boolean {
        let unit: Unit;
        UNITS.forEach(function(element, index) {
            if (element.id == id) {
                UNITS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }

}