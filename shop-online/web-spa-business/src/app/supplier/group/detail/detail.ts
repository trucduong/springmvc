import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SupplierService, SupplierGroup} from '../../shared/index';

@Component({
  selector: 'supplier-group-detail',
  templateUrl: 'src/app/supplier/group/detail/detail.html'
})

export class SupplierGroupDetailCmp  {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService) { }

  model: SupplierGroup;
  isEditing: Boolean;
  error: String;

  ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new SupplierGroup('-1', '', '');
            this.isEditing = false;
        } else {
            this.model = this.supplierService.getSupplierGroup(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.supplierService.saveSupplierGroup(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['supplier-group']);
  }

}