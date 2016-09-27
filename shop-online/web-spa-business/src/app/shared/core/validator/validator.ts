import { InvalidValue } from './invalid.value';

export interface Validator {
    validate(value: any): InvalidValue[];
}