import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Supplier } from '../shared/index';
import { SupplierService} from '../shared/index';

@Component({
  selector: 'supplier-detail',
  templateUrl: 'src/app/supplier/detail/detail.html'
})

export class SupplierDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService) { }

  model: Supplier;
  isEditing: Boolean;
  error: String;

   ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let phone = params['phone'] + '';
        if (phone == null || phone == '' || phone == '-1') {
            this.model = new Supplier('', '-1', '','','','','','','');
            this.isEditing = false;
        } else {
            this.model = this.supplierService.getSupplier(phone);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.supplierService.saveSupplier(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['supplier']);
  }


}