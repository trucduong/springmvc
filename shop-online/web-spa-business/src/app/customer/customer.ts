import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo } from './../shared/index';
import { Customer } from './shared/index';
import { CustomerService} from './shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'customer.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'customer.list.name', sortable: true, width: 30 },
  { name: 'phone', labelKey: 'common.list.phone', sortable: true, width: 20 },
  { name: 'birthDay', labelKey: 'common.list.birthDay', sortable: true, width: 20 },
  { name: 'revenune', labelKey: 'customer.list.revenune', sortable: true, width: 10 },
  { name: 'times', labelKey: 'customer.list.timesBought', sortable: true, width: 10 },
  { name: 'balanceDue', labelKey: 'customer.list.balanceDue', sortable: true, width: 10 }
];

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

  getHeaders(): GridHeader[] {
    return headers;
  }

  getDefaultSort(): SortInfo {
    return new SortInfo('name', 'asc');
  }

  getDefaultFilter(): FilterInfo {
    return new FilterInfo(['name', 'note']);
  }

  load(): Customer[] {
    return this.customerService.getCustomers();
  }

  getCurrentUrl(): string {
    return '/customer';
  }

  getDetailUrl(): string {
    return '/customer-detail';
  }

  delete(item: Customer): boolean {
    return this.customerService.deleteCustomer(item.id);
  }

}