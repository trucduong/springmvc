import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CustomerService, CustomerGroup } from '../../shared/index';
import { AlertInfo } from '../../../shared/index';

@Component({
  selector: 'customer-group-detail',
  templateUrl: 'src/app/customer/group/detail/detail.html'
})

export class CustomerGroupDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  model: CustomerGroup;
  isEditing: Boolean;
  message: AlertInfo;
  showLoading: Boolean;

  ngOnInit() {
    this.showLoading = true;
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

    this.showLoading = false;
  }

  onSave() {
      this.showLoading = true;
      // validate
      

      // save
      let result = this.customerService.saveCustomerGroup(this.model, this.isEditing);

      if (result) {
          this.message = new AlertInfo("success", "Save success");
          //this.onBack();
      } else {
          this.message = new AlertInfo("danger", "Can not save");
      }

      this.showLoading = false;
  }

  onBack() {
      this.router.navigate(['customer-group']);
  }
}