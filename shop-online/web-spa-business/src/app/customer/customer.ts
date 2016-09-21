import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from './shared/index';
import { CustomerService} from './shared/index';


@Component({
  selector: 'customer',
  templateUrl: 'src/app/customer/customer.html'
})

export class CustomerCmp implements OnInit  {
  constructor(
    private router: Router,
    private customerService: CustomerService) { }

  customers: Customer[];


  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

   onEdit(item: Customer) {
    this.router.navigate(['/customer-detail', item.phone]);
  }

   onAdd() {
    this.router.navigate(['/customer-detail', -1]);
  }

  onDelete(item: Customer) {
    let result = this.customerService.deleteCustomer(item.phone);
    // check result

    // reload
    this.ngOnInit();
    
}

}