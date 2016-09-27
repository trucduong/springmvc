import { InvalidValue } from './invalid.value'

export class ValidatorResult {
    field: string;
    errors: InvalidValue[];
    
    constructor(field: string, errors: InvalidValue[]) {
        this.field = field;
        this.errors = errors;
    }
}