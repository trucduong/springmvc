import { Validator } from './validator';

export class ValidatorSetting {
    field: string;
    validators: Validator[];
    
    constructor(field: string) {
        this.field = field;
        this.validators = [];
    }

    addValidator(validator: Validator) {
        this.validators.push(validator);
    }

    removeValidator(validator: Validator) {
        this.validators.forEach(item => {
            if (item == validator) {
                this.validators.pop();
            }
        });
    }

    clearAll() {
        this.validators = [];
    }
}