import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { CustomerService, CustomerGroup } from '../shared/index';

@Component({
  selector: 'customer-group',
  templateUrl: 'src/app/customer/group/group.html'
})

export class CustomerGroupCmp implements OnInit {
  constructor(
    private router: Router,
    translate: TranslateService,
    private customerService: CustomerService) { 
      translate.setDefaultLang('en');
      translate.use('vi');
      
    }

  allItems: CustomerGroup[];
  items: CustomerGroup[];

  ngOnInit() {
    this.onLoad();
  }

  onEdit(item: CustomerGroup) {
    this.router.navigate(['/customer-group-detail', item.id]);
  }

  onAdd() {
    this.router.navigate(['/customer-group-detail', -1]);
  }

  onDelete(item: CustomerGroup) {
    let result = this.customerService.deleteCustomerGroup(item.id);
    // check result

    // reload
    this.onLoad();
  }

  onShow(items: any[]) {
    this.items = items;
  }

  onLoad() {
    this.allItems = this.customerService.getCustomerGroups();
  }

  onFilter(value: string) {
    this.allItems = this.customerService.getCustomerGroupsByName(value);
  }

}