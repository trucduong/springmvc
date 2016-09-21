import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController } from '../../shared/index';
import { CustomerService, CustomerGroup } from '../shared/index';

@Component({
  selector: 'customer-group',
  templateUrl: 'src/app/customer/group/group.html'
})

export class CustomerGroupCmp extends ListController<CustomerGroup> implements OnInit {
  constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private customerService: CustomerService) {

      super(route, translate, router);
    }

  load(): CustomerGroup[] {
    return this.customerService.getCustomerGroups();
  }

  filter(value: string): CustomerGroup[] {
    return this.customerService.getCustomerGroupsByName(value);
  }

  getCurrentUrl(): string {
    return '/customer-group';
  }

  getDetailUrl(): string {
    return '/customer-group-detail';
  }

  delete(item: CustomerGroup): boolean {
    return this.customerService.deleteCustomerGroup(item.id);
  }
}