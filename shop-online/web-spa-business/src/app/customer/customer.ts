import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';
import { ListController } from './../shared/index';

import { Customer } from './shared/index';
import { CustomerService} from './shared/index';


@Component({
  selector: 'customer',
  templateUrl: 'src/app/customer/customer.html'
})

export class CustomerCmp extends ListController<Customer> implements OnInit  {
    constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private customerService: CustomerService) {

      super(route, translate, router);
    }


    load(): Customer[] {
    return this.customerService.getCustomers();
  }

  filter(value: string): Customer[] {
    return this.customerService.getCustomersByName(value);
  }

  getCurrentUrl(): string {
    return '/customer';
  }

  getDetailUrl(): string {
    return '/customer-detail';
  }

  delete(item: Customer): boolean {
    return this.customerService.deleteCustomer(item.phone);
  }

}