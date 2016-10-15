import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { WarehouseService, ReturningFromCustomer} from '../shared/index';

@Component({
  selector: 'warehouse-returning-from-customer',
  templateUrl: 'src/app/warehouse/returning-from-customer/returning-from-customer.html'
})

export class WarehouseReturningFromCustomerCmp implements OnInit {
  constructor(
    private router: Router,
    private warehouseService: WarehouseService) { }

  returningFromFustomers: ReturningFromCustomer[];

  ngOnInit() {
    this.returningFromFustomers = this.warehouseService.getReturningFromCustomers();
  }

  onEdit(item: ReturningFromCustomer) {
    this.router.navigate(['/warehouse-returning-from-customer-detail', item.id]);
  }

  onAdd() {
    this.router.navigate(['/warehouse-returning-from-customer-detail', -1]);
  }

  onDelete(item: ReturningFromCustomer) {
    let result = this.warehouseService.deleteReturningFromCustomer(item.id);
    // check result

    // reload
    this.ngOnInit();
  }

}