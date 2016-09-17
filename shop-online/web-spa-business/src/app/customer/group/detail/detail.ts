import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CustomerService, CustomerGroup } from '../../shared/index';

@Component({
  selector: 'customer-group',
  templateUrl: 'src/app/customer/group/detail/detail.html'
})

export class CustomerGroupDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  model: CustomerGroup;
  isEditing: Boolean;
  error: String;

  ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new CustomerGroup('-1', '', '');
            this.isEditing = false;
        } else {
            this.model = this.customerService.getCustomerGroup(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate

      // save
      let result = this.customerService.saveCustomerGroup(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['customer-group']);
  }
}