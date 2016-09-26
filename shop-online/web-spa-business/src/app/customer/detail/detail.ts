import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { Customer } from '../shared/index';
import { CustomerService} from '../shared/index';
import { EditController } from './../../shared/index';

@Component({
  selector: 'customer-detail',
  templateUrl: 'src/app/customer/detail/detail.html'
})

export class CustomerDetailCmp extends EditController<Customer> implements OnInit {
  constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private customerService: CustomerService) { 
        super(route, router, translate);
    }

   getCurrentUrl(): string {
        return '/customer-detail';
    }

    createModel(): Customer {
        return new Customer();
    }

    load(phone: any): Customer {
        return this.customerService.getCustomer(phone);;
    }

    validate(model: Customer): boolean {
        // TODO: validate customer group here
        // call this.addError(field, message) if has any error
        return true;
    }

    save(model: Customer): boolean {
        return this.customerService.saveCustomer(model, this.isEditing);
    }

}