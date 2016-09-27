import { ValidatorSetting } from '../validator.setting';
import { ValidatorResult } from '../validator.result';
import { InvalidValue } from '../invalid.value';

export class ModelValidator<M> {
    constructor(private settings: ValidatorSetting[]) {};

    validate(model: M): ValidatorResult[] {
        let results: ValidatorResult[];

        this.settings.forEach(setting => {
            let value = model[setting.field];
            let errs: InvalidValue[] = [];
            setting.validators.forEach(validator => {
                errs.concat(validator.validate(value));
            });

            if (errs.length > 0) {
                results.push(new ValidatorResult(setting.field, errs));
            }
        });

        return results;
    }
}