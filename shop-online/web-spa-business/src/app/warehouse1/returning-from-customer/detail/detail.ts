import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { WarehouseService, ReturningFromCustomer } from '../../shared/index';

@Component({
  selector: 'warehouse-returning-from-customer-detail',
  templateUrl: 'src/app/warehouse/returning-from-customer/detail/detail.html'
})

export class WarehouseReturningFromCustomerDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {}

  model: ReturningFromCustomer;
  isEditing: Boolean;
  error: String;

  ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new ReturningFromCustomer('-1', '', '','','','','','','','');
            this.isEditing = false;
        } else {
            this.model = this.warehouseService.getReturningFromCustomer(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.warehouseService.saveReturningFromCustomer(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['warehouse-returning-from-customer']);
  }
}