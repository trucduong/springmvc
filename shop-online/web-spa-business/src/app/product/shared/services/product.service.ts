import { Injectable } from '@angular/core';

import { ProductGroup } from '../models/product.group'
import {PRODUCT_GROUPS} from './product.data';

import {Product} from '../models/product'
import {PRODUCT} from  './product.data';


@Injectable()
export class ProductService {
    constructor() { }

    // Group
    getProductGroups(): any {
        return PRODUCT_GROUPS;
    }

    getProductGroup(id: String): any {
        let product: ProductGroup;
        PRODUCT_GROUPS.forEach(element => {
            if (element.id == id) {
                product = element;
                return;
            }
        });
        return product;
    }

    saveProductGroup(item: ProductGroup, isEditing: Boolean): Boolean {
        if (isEditing) {
            PRODUCT_GROUPS.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.code = item.code;
                    element.status = item.status;
                    
                    return;
                }
            });
        } else {
            let productGroup = PRODUCT_GROUPS.push(item);
        }

        return true;
    }

    deleteProductGroup(id: String): Boolean {
        let productGroup: ProductGroup;
        PRODUCT_GROUPS.forEach(function(element, index) {
            if (element.id == id) {
                PRODUCT_GROUPS.splice(index, 1);
                
                return;
            }
        });

        return true;
    }


    // Product
    getProducts(): any {
        return PRODUCT;
    }

    getProduct(code: String): any {
        let product: Product;
        PRODUCT.forEach(element => {
            if (element.code == code) {
                product = element;
                return;
            }
        });
        return product;
    }

    saveProduct(item: Product, isEditing: Boolean): Boolean {
        if (isEditing) {
            PRODUCT.forEach(element => {
                if (element.code == item.code) {
                    element.name = item.name;
                    element.image = item.image;
                    element.unit = item.unit;
                    element.group = item.group;
                     element.input_price = item.input_price;
                    element.retail_price = item.retail_price;
                     element.wholesale_price = item.wholesale_price;
                    element.saleof_per = item.saleof_per;
                    element.saleof_price = item.saleof_price;
                    element.warning_number = item.warning_number;
                     element.status = item.status;
                    element.note = item.note;
                    return;
                }
            });
        } else {
            let product = PRODUCT.push(item);
        }

        return true;
    }

    deleteProduct(code: String): Boolean {
        let product: Product;
        PRODUCT.forEach(function(element, index) {
            if (element.code == code) {
                PRODUCT.splice(index, 1);
                
                return;
            }
        });

        return true;
    }

}