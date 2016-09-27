import { Injectable } from '@angular/core';


import {Unit} from '../models/unit'
import {UNIT} from  './unit.data';


@Injectable()
export class UnitService {
    constructor() { }

    // Customer
    getUnits(): any {
        return UNIT;
    }

    getUnit(id: String): any {
        let unit: Unit;
        UNIT.forEach(element => {
            if (element.id == id) {
                unit = element;
                return;
            }
        });
        return unit;
    }

    saveUnit(item: Unit, isEditing: Boolean): Boolean {
        if (isEditing) {
            UNIT.forEach(element => {
                if (element.id == item.id) {
                    element.name = item.name;
                    element.note = item.note;                
                    return;
                }
            });
        } else {
            let unit = UNIT.push(item);
        }

        return true;
    }

    deleteUnit(id: String): Boolean {
        let unit: Unit;
        UNIT.forEach(function(element, index) {
            if (element.id == id) {
                UNIT.splice(index, 1);
                
                return;
            }
        });

        return true;
    }

}