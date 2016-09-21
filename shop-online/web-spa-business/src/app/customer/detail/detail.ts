import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Customer } from '../shared/index';
import { CustomerService} from '../shared/index';

@Component({
  selector: 'customer-detail',
  templateUrl: 'src/app/customer/detail/detail.html'
})

export class CustomerDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  model: Customer;
  isEditing: Boolean;
  error: String;

   ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let phone = params['phone'] + '';
        if (phone == null || phone == '' || phone == '-1') {
            this.model = new Customer('', '-1', '','','','','','','');
            this.isEditing = false;
        } else {
            this.model = this.customerService.getCustomer(phone);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.customerService.saveCustomer(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['customer']);
  }


}