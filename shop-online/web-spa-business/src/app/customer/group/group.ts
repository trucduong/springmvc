import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService, CustomerGroup } from '../shared/index';
import { PaginationInfo } from '../../shared/index';

@Component({
  selector: 'customer-group',
  templateUrl: 'src/app/customer/group/group.html'
})

export class CustomerGroupCmp implements OnInit {
  constructor(
    private router: Router,
    private customerService: CustomerService) { }

  customerGroups: CustomerGroup[];
  paginationInfo: PaginationInfo;

  ngOnInit() {
    this.customerGroups = this.customerService.getCustomerGroups();
    this.paginationInfo = new PaginationInfo(46);
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
    this.ngOnInit();
  }

  onPaging(index: number) {
    this.paginationInfo.update(index, 46);
  }

}