import { Validator } from '../validator';
import { InvalidValue } from '../invalid.value';

const ERR_CODE = {
    type: 'validator.number.type',
    require: 'validator.number.require',
    min: 'validator.number.min',
    max: 'validator.number.max'
};

export class NumberValidator implements Validator {
    
    require: boolean;
    min: number;
    max: number;

    constructor(require: boolean, min: number, max: number) {
        this.require = require;
        this.min = min;
        this.max = max;
    }

    validate(value: any): InvalidValue[] {
        let errors: InvalidValue[] = [];

        if (value) {
            // type
            if (!Number(value)) {
                errors.push(new InvalidValue(ERR_CODE.type)); 
            
            // min value
            } else if (value < this.min) {
                errors.push(new InvalidValue(ERR_CODE.min));
                
            // max value
            } else if (value > this.max) {
                errors.push(new InvalidValue(ERR_CODE.max));
            }

        // require
        } else if (this.require){
            errors.push(new InvalidValue(ERR_CODE.require));
        }

        return errors;
    }
}